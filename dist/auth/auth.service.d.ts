import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PhienDangNhap } from 'src/database/entities/phien_dang_nhap.entity';
import { SignUpDto } from './dto/signUp.dto';
import { User } from 'src/database/entities/user.entity';
import { PhanQuyen } from 'src/database/entities/phan_quyen.entity';
export declare class AuthService {
    private readonly configService;
    private readonly userRepository;
    private readonly userLogin;
    private readonly phanQuyenRepo;
    private readonly jwtService;
    private readonly logger;
    private readonly oAuth2Client;
    constructor(configService: ConfigService, userRepository: Repository<User>, userLogin: Repository<PhienDangNhap>, phanQuyenRepo: Repository<PhanQuyen>, jwtService: JwtService);
    signUp(signUpDto: SignUpDto): Promise<{
        message: string;
        result: User;
    }>;
    login(username: string, password: string): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    private getToken;
    private getPayLoad;
    logOut(userLoggedIn: any): Promise<any>;
    validateAccessToken(accessToken: string): Promise<any>;
}
