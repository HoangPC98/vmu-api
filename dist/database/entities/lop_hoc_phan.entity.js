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
exports.LopHocPhan = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
let LopHocPhan = class LopHocPhan extends base_entity_1.default {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], LopHocPhan.prototype, "id_mon", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], LopHocPhan.prototype, "id_giang_vien", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], LopHocPhan.prototype, "lich_hoc_from", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], LopHocPhan.prototype, "lich_hoc_to", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LopHocPhan.prototype, "thoi_khoa_bieu", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], LopHocPhan.prototype, "so_sv_toi_da", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], LopHocPhan.prototype, "so_sv", void 0);
LopHocPhan = __decorate([
    (0, typeorm_1.Entity)('LopHocPhan')
], LopHocPhan);
exports.LopHocPhan = LopHocPhan;
//# sourceMappingURL=lop_hoc_phan.entity.js.map