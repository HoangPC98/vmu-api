import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signUp.dto';
import { AccessTokenDto } from './dto/verifyAtoken.dto';
import { JwtPayload } from './JwtPayload';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(signUpBody: SignUpDto): Promise<any>;
    login(loginDto: LoginDto): Promise<any>;
    verifyAccessToken(accessTokenDto: AccessTokenDto): Promise<any>;
    logOut(userLoggedin: JwtPayload): Promise<any>;
}
