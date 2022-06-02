import { Controller, Post, Body, HttpCode, Get } from '@nestjs/common';
import { ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { GetCurrentUserLogin } from './decorators/getCurrentUser.auth';
import { Public } from './decorators/public.auth';
import { LoginDto } from './dto/login.dto';
import { RefreshTokenDto } from './dto/refreshToken.dto';
import { SignUpDto } from './dto/signUp.dto';
import { AccessTokenDto } from './dto/verifyAtoken.dto';
import { JwtPayload } from './JwtPayload';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('sign-up')
  async signUp(@Body() signUpBody: SignUpDto): Promise<any> {
    return await this.authService.signUp(signUpBody);
  }

  @Public()
  @ApiResponse({
    status: 200,
    description: 'return access token and refresh token',
  })
  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<any> {
    const token = await this.authService.login(
      loginDto.username,
      loginDto.password,
    );
    return {
      result: token,
    };
  }

  @ApiResponse({
    status: 200,
    description: 'verify if logged in',
  })
  @Post('verify-token')
  async verifyAccessToken(
    @Body() accessTokenDto: AccessTokenDto,
  ): Promise<any> {
    const validate_token = await this.authService.validateAccessToken(
      accessTokenDto.accessToken,
    );
    return {
      result: validate_token,
    };
  }

  @ApiOkResponse({ description: 'logout success' })
  @Get('logout')
  async logOut(@GetCurrentUserLogin() userLoggedin: JwtPayload): Promise<any> {
    await this.authService.logOut(userLoggedin);
    return {
      message: 'logout success',
    };
  }
}
