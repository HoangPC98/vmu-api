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
const overtime_module_1 = require("./overtime/overtime.module");
const checkinout_module_1 = require("./checkinout/checkinout.module");
const worktime_module_1 = require("./worktime/worktime.module");
const config_1 = require("@nestjs/config");
const configuration_1 = require("./config/configuration");
const database_module_1 = require("./database/database.module");
const offwork_module_1 = require("./offwork/offwork.module");
const auth_module_1 = require("./auth/auth.module");
const core_1 = require("@nestjs/core");
const jwt_auth_guard_1 = require("./auth/gaurds/jwt-auth.guard");
const casl_module_1 = require("./casl/casl.module");
const PoliciesGuard_1 = require("./casl/guards/PoliciesGuard");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ load: [configuration_1.default], isGlobal: true }),
            overtime_module_1.OvertimeModule,
            worktime_module_1.WorktimeModule,
            checkinout_module_1.CheckinoutModule,
            database_module_1.DatabaseModule,
            offwork_module_1.OffworkModule,
            auth_module_1.AuthModule,
            casl_module_1.CaslModule,
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