import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/gaurds/jwt-auth.guard';
import { CaslModule } from './casl/casl.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration], isGlobal: true}),
    DatabaseModule,
    AuthModule,
    CaslModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
