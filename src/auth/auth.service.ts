import {
  BadRequestException,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from '../database/entities/hoc_vien.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {
  LoginTicket,
  OAuth2Client as GoogleOAuth2Client,
} from 'google-auth-library';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  private readonly oAuth2Client: GoogleOAuth2Client;

  constructor(
    private readonly configService: ConfigService,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {
    const { clientId, clientSecret } = this.configService.get('googleAuth');
    this.oAuth2Client = new GoogleOAuth2Client(clientId, clientSecret);
  }

  async login(username: string, password: string) {
    const FUNC_NAME = 'login';

    const { clientId, authorizedDomain } = this.configService.get('googleAuth');

    const userRecs = await this.usersRepository.find({
      where: { email },
      relations: ['userType'],
    });

    if (!userRecs || userRecs.length <= 0) {
      this.logger.error(
        `${FUNC_NAME} not found user with email ${email} in database`,
      );
      throw new UnauthorizedException();
    }

    const nameSplit = userRecs[0].name.split(' ');
    const givename = nameSplit[nameSplit.length - 1];
    const payload = {
      username: userRecs[0].name,
      sub: userRecs[0].id,
      user_type_id: userRecs[0].userType.id,
      permissions: userRecs[0].userType.permissions,
      role: userRecs[0].userType.desc,
      email: userRecs[0].email,
      givename: givename,
      phone: userRecs[0].phone,
    };

    const tokens = await this.getToken(payload);
    return {
      access_token: tokens.accessToken,
      refresh_token: tokens.refreshToken,
    };
  }

  async refreshTokens(refreshToken: string) {
    const IAT = 'iat';
    const EXP = 'exp';
    const payload = await this.jwtService.decode(refreshToken);
    delete payload[IAT];
    delete payload[EXP];

    const tokens = await this.getToken(payload);
    return {
      access_token: tokens.accessToken,
      refresh_token: tokens.refreshToken,
    };
  }

  async getToken(payload) {
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
