import { Module } from '@nestjs/common';
import { OvertimeModule } from './overtime/overtime.module';
import { CheckinoutModule } from './checkinout/checkinout.module';
import { WorktimeModule } from './worktime/worktime.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { DatabaseModule } from './database/database.module';
import { OffworkModule } from './offwork/offwork.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/gaurds/jwt-auth.guard';
import { CaslModule } from './casl/casl.module';
import { PoliciesGuard } from './casl/guards/PoliciesGuard';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
    OvertimeModule,
    WorktimeModule,
    CheckinoutModule,
    DatabaseModule,
    OffworkModule,
    AuthModule,
    CaslModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: PoliciesGuard,
    },
  ],
})
export class AppModule {}
