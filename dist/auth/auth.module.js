"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const hoc_vien_entity_1 = require("../database/entities/hoc_vien.entity");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const jwt_strategy_1 = require("./strategies/jwt.strategy");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const user_entity_1 = require("../database/entities/user.entity");
const phien_dang_nhap_entity_1 = require("../database/entities/phien_dang_nhap.entity");
const phan_quyen_entity_1 = require("../database/entities/phan_quyen.entity");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([hoc_vien_entity_1.HocVien, user_entity_1.User, phien_dang_nhap_entity_1.PhienDangNhap, phan_quyen_entity_1.PhanQuyen]),
            passport_1.PassportModule,
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    secret: configService.get('jwtAuth').jwt_token_secret,
                    signOptions: {
                        expiresIn: configService.get('jwtAuth').access_token_ttl,
                    },
                }),
            }),
            config_1.ConfigModule,
        ],
        providers: [jwt_strategy_1.JwtStrategy, auth_service_1.AuthService, config_1.ConfigService],
        controllers: [auth_controller_1.AuthController],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map