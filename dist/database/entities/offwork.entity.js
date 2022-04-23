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
exports.Offwork = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const review_entity_1 = require("./review.entity");
let Offwork = class Offwork extends base_entity_1.default {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Offwork.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Offwork.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Offwork.prototype, "review_id", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime'),
    __metadata("design:type", String)
], Offwork.prototype, "reg_start_at", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime'),
    __metadata("design:type", String)
], Offwork.prototype, "reg_end_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Offwork.prototype, "reason", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => review_entity_1.Review, (review) => review.offwork),
    (0, typeorm_1.JoinColumn)({ name: 'review_id' }),
    __metadata("design:type", review_entity_1.Review)
], Offwork.prototype, "review", void 0);
Offwork = __decorate([
    (0, typeorm_1.Entity)('offworks')
], Offwork);
exports.Offwork = Offwork;
//# sourceMappingURL=offwork.entity.js.map