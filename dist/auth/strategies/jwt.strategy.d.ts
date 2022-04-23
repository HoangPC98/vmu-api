import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { AuthUser } from '../AuthUser';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly configService;
    constructor(configService: ConfigService);
    validate(payload: any): Promise<AuthUser>;
}
export {};
