"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OffworkModule = void 0;
const common_1 = require("@nestjs/common");
const offwork_service_1 = require("./offwork.service");
const offwork_controller_1 = require("./offwork.controller");
const typeorm_1 = require("@nestjs/typeorm");
const offwork_entity_1 = require("../database/entities/offwork.entity");
const review_entity_1 = require("../database/entities/review.entity");
const casl_module_1 = require("../casl/casl.module");
let OffworkModule = class OffworkModule {
};
OffworkModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([offwork_entity_1.Offwork, review_entity_1.Review]), casl_module_1.CaslModule],
        controllers: [offwork_controller_1.OffworkController],
        providers: [offwork_service_1.OffworkService],
    })
], OffworkModule);
exports.OffworkModule = OffworkModule;
//# sourceMappingURL=offwork.module.js.map