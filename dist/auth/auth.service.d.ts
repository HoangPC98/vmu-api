import { User } from '../database/entities/user.entity';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly configService;
    private readonly usersRepository;
    private readonly jwtService;
    private readonly logger;
    private readonly oAuth2Client;
    constructor(configService: ConfigService, usersRepository: Repository<User>, jwtService: JwtService);
    loginGoogle(googleToken: string): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    refreshTokens(refreshToken: string): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    getToken(payload: any): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    validateAccessToken(accessToken: string): Promise<any>;
}
