import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthUser } from '../AuthUser';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('jwtAuth').access_token_secret,
    });
  }

  async validate(payload: any): Promise<AuthUser> {
    return {
      id: payload.sub,
      username: payload.username,
      password: payload.password,
      user_type_id: payload.user_type_id,
      permissions: payload.permissions,
    };
  }
}
