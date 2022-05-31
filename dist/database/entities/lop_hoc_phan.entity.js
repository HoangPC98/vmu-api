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
const enum_types_1 = require("../../dataTypes/enum.types");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const giang_vien_entity_1 = require("./giang_vien.entity");
const hoc_phan_entity_1 = require("./hoc_phan.entity");
let LopHocPhan = class LopHocPhan extends base_entity_1.default {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], LopHocPhan.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], LopHocPhan.prototype, "id_mon", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => hoc_phan_entity_1.HocPhan, (hoc_phan) => hoc_phan.id),
    (0, typeorm_1.JoinColumn)({ name: 'id_mon' }),
    __metadata("design:type", hoc_phan_entity_1.HocPhan)
], LopHocPhan.prototype, "hocPhan", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], LopHocPhan.prototype, "id_giang_vien", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => giang_vien_entity_1.GiangVien, (giang_vien) => giang_vien.user_id),
    (0, typeorm_1.JoinColumn)({ name: 'id_giang_vien' }),
    __metadata("design:type", giang_vien_entity_1.GiangVien)
], LopHocPhan.prototype, "giangVien", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], LopHocPhan.prototype, "ngay_bat_dau", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Date)
], LopHocPhan.prototype, "ngay_ket_thuc", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LopHocPhan.prototype, "ngay_hoc", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], LopHocPhan.prototype, "si_so_max", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], LopHocPhan.prototype, "si_so_min", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: false }),
    __metadata("design:type", Boolean)
], LopHocPhan.prototype, "isactive", void 0);
LopHocPhan = __decorate([
    (0, typeorm_1.Entity)('LopHocPhan')
], LopHocPhan);
exports.LopHocPhan = LopHocPhan;
//# sourceMappingURL=lop_hoc_phan.entity.js.map