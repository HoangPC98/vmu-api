import { AuthService } from './auth.service';
import { GoogleAuthDto } from './dto/googleAuth.dto';
import { RefreshTokenDto } from './dto/refreshToken.dto';
import { AccessTokenDto } from './dto/verifyAtoken.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    loginGoogle(googleAuthDto: GoogleAuthDto): Promise<any>;
    refreshTokens(refreshTokenDto: RefreshTokenDto): Promise<any>;
    verifyAccessToken(accessTokenDto: AccessTokenDto): Promise<any>;
}
