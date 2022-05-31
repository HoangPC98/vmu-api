"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const configuration_1 = require("./config/configuration");
const database_module_1 = require("./database/database.module");
const auth_module_1 = require("./auth/auth.module");
const core_1 = require("@nestjs/core");
const jwt_auth_guard_1 = require("./auth/gaurds/jwt-auth.guard");
const casl_module_1 = require("./casl/casl.module");
const hocphan_module_1 = require("./api_modules/hocphan/hocphan.module");
const khoa_module_1 = require("./api_modules/khoa/khoa.module");
const lop_hoc_phan_module_1 = require("./api_modules/lop-hoc-phan/lop-hoc-phan.module");
const chuyen_nghanh_module_1 = require("./api_modules/chuyen-nghanh/chuyen-nghanh.module");
const user_module_1 = require("./api_modules/user/user.module");
const bang_diem_module_1 = require("./api_modules/bang-diem/bang-diem.module");
const thong_bao_module_1 = require("./api_modules/thong-bao/thong-bao.module");
const hoc_vien_module_1 = require("./api_modules/hoc-vien/hoc-vien.module");
const PoliciesGuard_1 = require("./casl/guards/PoliciesGuard");
const phan_lop_module_1 = require("./api_modules/phan-lop/phan-lop.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ load: [configuration_1.default], isGlobal: true }),
            database_module_1.DatabaseModule,
            auth_module_1.AuthModule,
            casl_module_1.CaslModule,
            hocphan_module_1.HocphanModule,
            khoa_module_1.KhoaModule,
            lop_hoc_phan_module_1.LopHocPhanModule,
            chuyen_nghanh_module_1.ChuyenNganhModule,
            user_module_1.UserModule,
            bang_diem_module_1.BangDiemModule,
            thong_bao_module_1.ThongBaoModule,
            hoc_vien_module_1.HocVienModule,
            phan_lop_module_1.PhanLopModule,
        ],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: jwt_auth_guard_1.JwtAuthGuard,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: PoliciesGuard_1.PoliciesGuard,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map