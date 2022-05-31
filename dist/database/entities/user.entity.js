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
exports.User = exports.GioiTinh = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const hoc_vien_entity_1 = require("./hoc_vien.entity");
const phan_quyen_entity_1 = require("./phan_quyen.entity");
var GioiTinh;
(function (GioiTinh) {
    GioiTinh["NAM"] = "male";
    GioiTinh["NU"] = "female";
    GioiTinh["KHAC"] = "other";
})(GioiTinh = exports.GioiTinh || (exports.GioiTinh = {}));
let User = class User extends base_entity_1.default {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "user_type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => phan_quyen_entity_1.PhanQuyen),
    (0, typeorm_1.JoinColumn)({ name: 'user_type' }),
    __metadata("design:type", phan_quyen_entity_1.PhanQuyen)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => hoc_vien_entity_1.HocVien, (hocVien) => hocVien.user_id),
    (0, typeorm_1.JoinColumn)({ name: 'id' }),
    __metadata("design:type", hoc_vien_entity_1.HocVien)
], User.prototype, "hocVien", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], User.prototype, "ho_ten", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "ngay_sinh", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], User.prototype, "gioi_tinh", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "dien_thoai", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "dia_chi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "trang_thai", void 0);
User = __decorate([
    (0, typeorm_1.Entity)('User')
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map