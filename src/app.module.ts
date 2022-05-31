import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/gaurds/jwt-auth.guard';
import { CaslModule } from './casl/casl.module';
import { HocphanModule } from './api_modules/hocphan/hocphan.module';
import { KhoaModule } from './api_modules/khoa/khoa.module';
import { LopHocPhanModule } from './api_modules/lop-hoc-phan/lop-hoc-phan.module';
import { ChuyenNganhModule } from './api_modules/chuyen-nghanh/chuyen-nghanh.module';
import { UserModule } from './api_modules/user/user.module';
import { BangDiemModule } from './api_modules/bang-diem/bang-diem.module';
import { ThongBaoModule } from './api_modules/thong-bao/thong-bao.module';
import { HocVienModule } from './api_modules/hoc-vien/hoc-vien.module';
import { PoliciesGuard } from './casl/guards/PoliciesGuard';
import { PhanLopModule } from './api_modules/phan-lop/phan-lop.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration], isGlobal: true}),
    DatabaseModule,
    AuthModule,
    CaslModule,
    HocphanModule,
    KhoaModule,
    LopHocPhanModule,
    ChuyenNganhModule,
    UserModule,
    BangDiemModule,
    ThongBaoModule,
    HocVienModule,
    PhanLopModule,
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
