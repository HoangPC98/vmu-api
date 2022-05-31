import {
  BadRequestException,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { HocVien } from '../database/entities/hoc_vien.entity';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {
  LoginTicket,
  OAuth2Client as GoogleOAuth2Client,
} from 'google-auth-library';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PhienDangNhap } from 'src/database/entities/phien_dang_nhap.entity';
import { SignUpDto } from './dto/signUp.dto';
import { User } from 'src/database/entities/user.entity';
import { JwtPayload } from './JwtPayload';
import { PhanQuyen } from 'src/database/entities/phan_quyen.entity';
import { Role } from 'src/dataTypes/enum.types';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  private readonly oAuth2Client: GoogleOAuth2Client;

  constructor(
    private readonly configService: ConfigService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(PhienDangNhap)
    private readonly userLogin: Repository<PhienDangNhap>,
    @InjectRepository(PhanQuyen)
    private readonly phanQuyenRepo: Repository<PhanQuyen>,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(signUpDto: SignUpDto) {
    console.log('OKOOKOKO');
    const foundUser = await this.userRepository.findOne({
      where: { username: signUpDto.username, email: signUpDto.email },
    });

    console.log('foundUser', foundUser);

    if (foundUser)
      throw new BadRequestException(
        'this user name or email exist, please try again',
      );
    try {
      let newUser = new User();
      newUser.username = signUpDto.username;
      newUser.email = signUpDto.email;
      newUser.password = signUpDto.password;
      newUser.user_type = signUpDto.user_type || Role.GeneralUser;
      console.log('new user created', newUser);
      const result = await this.userRepository.save(newUser);
      return {
        message: 'ok',
        result: result,
      };
    } catch (error) {
      this.logger.error(error.message);
      throw new Error(error.message);
    }
  }

  async login(username: string, password: string) {
    const FUNC_NAME = 'login';

    const foundUser = await this.userRepository.findOne({
      where: { username: username, password: password },
      // relations: ['role'],
    });

    // const foundUser = await this.userRepository
    //   .createQueryBuilder("user")
    //   .where("username =: username", { username })
    //   .leftJoin('')
    console.log('foun', foundUser);

    if (!foundUser) throw new BadRequestException('wrong username of password');
    else {
      const foundUserLoggedIn = await this.userLogin.findOne({
        where: { username },
      });

      console.log('OK log in', foundUserLoggedIn);
      console.log('FOUND USER ', foundUser);

      if (foundUserLoggedIn)
        throw new BadRequestException('ban da dang nhap roi !');
      else {
        const getPhanQuyen = await this.phanQuyenRepo.findOne({
          role: foundUser.user_type,
        });

        console.log('getPhanQuyen', getPhanQuyen)
        const payload: JwtPayload = {
          user_id: foundUser.id,
          username: username,
          email: foundUser.email,
          permissions: getPhanQuyen.quyen,
          user_type: foundUser.user_type,
        };
        console.log('payload', payload);
        const tokens = await this.getToken(payload);

        const newUserLoginSession = new PhienDangNhap();
        newUserLoginSession.username = username;
        newUserLoginSession.token = tokens.refreshToken;
        const result = await this.userLogin.save(newUserLoginSession);

        console.log('OK log', result);

        return {
          access_token: tokens.accessToken,
          refresh_token: tokens.refreshToken,
        };
      }
    }
  }

  private async getToken(payload) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: this.configService.get('jwtAuth').access_token_secret,
        expiresIn: this.configService.get('jwtAuth').access_token_ttl,
      }),
      this.jwtService.signAsync(payload, {
        secret: this.configService.get('jwtAuth').refresh_token_secret,
        expiresIn: this.configService.get('jwtAuth').refresh_token_ttl,
      }),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

  private async getPayLoad() {}

  async logOut(userLoggedIn): Promise<any> {
    console.log('userloginn', userLoggedIn);
    try {
      await this.userLogin.delete({ username: userLoggedIn.username });
    } catch (err) {
      this.logger.error('Logout Error: ', err.message);
      throw new Error(err.message);
    }
  }

  async validateAccessToken(accessToken: string): Promise<any> {
    try {
      const validate = await this.jwtService.verify(
        accessToken,
        this.configService.get('jwtAuth').access_token_secret,
      );
      if (!validate) throw new BadRequestException();
      return { is_valid: true };
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
