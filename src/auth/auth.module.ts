import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { HocVien } from '../database/entities/hoc_vien.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';
// import { JwtRefreshTokenStrategy } from './strategies/jwt-refresh.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { User } from 'src/database/entities/user.entity';
import { PhienDangNhap } from 'src/database/entities/phien_dang_nhap.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([HocVien, User, PhienDangNhap]),

    PassportModule,
    JwtModule.registerAsync({
      // imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('jwtAuth').jwt_token_secret,
        signOptions: {
          expiresIn: configService.get('jwtAuth').access_token_ttl,
        },
      }),
    }),
    ConfigModule,
  ],
  providers: [JwtStrategy, AuthService, ConfigService],
  controllers: [AuthController],
})
export class AuthModule {}
