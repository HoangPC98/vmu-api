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
exports.HocVien = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const chuyen_nganh_entity_1 = require("./chuyen_nganh.entity");
const khoa_entity_1 = require("./khoa.entity");
const user_entity_1 = require("./user.entity");
let HocVien = class HocVien extends base_entity_1.default {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], HocVien.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User, (user) => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.User)
], HocVien.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], HocVien.prototype, "id_khoa", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => khoa_entity_1.Khoa),
    (0, typeorm_1.JoinColumn)({ name: 'id_khoa' }),
    __metadata("design:type", khoa_entity_1.Khoa)
], HocVien.prototype, "khoa", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], HocVien.prototype, "id_chuyen_nganh", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => chuyen_nganh_entity_1.ChuyenNganh),
    (0, typeorm_1.JoinColumn)({ name: 'id_chuyen_nghanh' }),
    __metadata("design:type", chuyen_nganh_entity_1.ChuyenNganh)
], HocVien.prototype, "chuyenNganh", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], HocVien.prototype, "ho_ten", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HocVien.prototype, "diem_dau_vao", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HocVien.prototype, "trang_thai", void 0);
HocVien = __decorate([
    (0, typeorm_1.Entity)('HocVien')
], HocVien);
exports.HocVien = HocVien;
//# sourceMappingURL=hoc_vien.entity.js.map