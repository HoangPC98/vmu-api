import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.auth';
import { GoogleAuthDto } from './dto/googleAuth.dto';
import { RefreshTokenDto } from './dto/refreshToken.dto';
import { AccessTokenDto } from './dto/verifyAtoken.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @ApiResponse({
    status: 200,
    description: 'return access token and refresh token',
  })
  @Post('googles')
  async loginGoogle(@Body() googleAuthDto: GoogleAuthDto): Promise<any> {
    const token = await this.authService.loginGoogle(googleAuthDto.googleToken);
    return {
      result: token,
    };
  }

  @Public()
  @ApiResponse({
    status: 201,
    description: 'return access token and refresh token',
  })
  @Post('refresh')
  async refreshTokens(@Body() refreshTokenDto: RefreshTokenDto): Promise<any> {
    const token = await this.authService.refreshTokens(
      refreshTokenDto.refreshToken,
    );
    return {
      result: token,
    };
  }

  @Public()
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
}
