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
const typeorm_1 = require("typeorm");
class CustomBaseEntity extends typeorm_1.BaseEntity {
    constructor() {
        super(...arguments);
        this.created_at = new Date();
        this.updated_at = new Date();
    }
}
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        nullable: false,
    }),
    __metadata("design:type", Date)
], CustomBaseEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        nullable: false,
    }),
    __metadata("design:type", Date)
], CustomBaseEntity.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        nullable: true,
    }),
    __metadata("design:type", Date)
], CustomBaseEntity.prototype, "deleted_at", void 0);
exports.default = CustomBaseEntity;
//# sourceMappingURL=base.entity.js.map