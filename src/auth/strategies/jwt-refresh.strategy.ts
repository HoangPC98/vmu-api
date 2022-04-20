import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
@Injectable()
export class JwtRefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh-token',
) {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          return request?.cookies?.Refresh;
        },
      ]),
      secretOrKey: configService.get('jwtAuth').refresh_token_secret,
      passReqToCallback: true,
    });
  }

  // async validate(request: Request, payload: TokenPayload) {
  //   const refreshToken = request.cookies?.Refresh;
  //   return this.userService.getUserIfRefreshTokenMatches(
  //     refreshToken,
  //     payload.userId,
  //   );
  // }
}
