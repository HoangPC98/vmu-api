"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckinoutModule = void 0;
const common_1 = require("@nestjs/common");
const checkinout_service_1 = require("./checkinout.service");
const checkinout_controller_1 = require("./checkinout.controller");
const typeorm_1 = require("@nestjs/typeorm");
const worktime_entity_1 = require("../database/entities/worktime.entity");
const worktype_entity_1 = require("../database/entities/worktype.entity");
const user_entity_1 = require("../database/entities/user.entity");
const worktime_service_1 = require("../worktime/worktime.service");
let CheckinoutModule = class CheckinoutModule {
};
CheckinoutModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([worktime_entity_1.WorkTime, worktype_entity_1.WorkType, user_entity_1.User])],
        controllers: [checkinout_controller_1.CheckinoutController],
        providers: [checkinout_service_1.CheckinoutService, worktime_service_1.WorktimeService],
    })
], CheckinoutModule);
exports.CheckinoutModule = CheckinoutModule;
//# sourceMappingURL=checkinout.module.js.map