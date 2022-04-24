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
exports.BangDiem = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const hoc_vien_entity_1 = require("./hoc_vien.entity");
const hoc_phan_entity_1 = require("./hoc_phan.entity");
let BangDiem = class BangDiem extends base_entity_1.default {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], BangDiem.prototype, "id_hoc_vien", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => hoc_vien_entity_1.HocVien),
    (0, typeorm_1.JoinColumn)({ name: 'id_hoc_vien' }),
    __metadata("design:type", hoc_vien_entity_1.HocVien)
], BangDiem.prototype, "hocVien", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], BangDiem.prototype, "id_hoc_phan", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => hoc_vien_entity_1.HocVien),
    (0, typeorm_1.JoinColumn)({ name: 'id_hoc_vien' }),
    __metadata("design:type", hoc_phan_entity_1.HocPhan)
], BangDiem.prototype, "hocPhan", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BangDiem.prototype, "diem_x", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BangDiem.prototype, "diem_y", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BangDiem.prototype, "diem_btl", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BangDiem.prototype, "diem_z", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], BangDiem.prototype, "du_dieu_kien", void 0);
BangDiem = __decorate([
    (0, typeorm_1.Entity)('BangDiem')
], BangDiem);
exports.BangDiem = BangDiem;
//# sourceMappingURL=bang_diem.entity.js.map