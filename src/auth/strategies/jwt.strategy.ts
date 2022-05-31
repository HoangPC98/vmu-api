import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from '../JwtPayload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('jwtAuth').jwt_token_secret,
    });
  }

  async validate(payload: any): Promise<JwtPayload> {
    return {
      user_id: payload.user_id,
      username: payload.username,
      user_type: payload.user_type,
      email: payload.email,
      permissions: payload.permissions
    };
  }
}
