"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkType = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const worktime_entity_1 = require("./worktime.entity");
let WorkType = class WorkType extends base_entity_1.default {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], WorkType.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], WorkType.prototype, "desc", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => worktime_entity_1.WorkTime, (workTime) => workTime.workType),
    __metadata("design:type", Array)
], WorkType.prototype, "workTimes", void 0);
WorkType = __decorate([
    (0, typeorm_1.Entity)('work_types')
], WorkType);
exports.WorkType = WorkType;
//# sourceMappingURL=worktype.entity.js.map