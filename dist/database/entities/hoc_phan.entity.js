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
exports.HocPhan = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const chuyen_nganh_entity_1 = require("./chuyen_nganh.entity");
let HocPhan = class HocPhan extends base_entity_1.default {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], HocPhan.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HocPhan.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], HocPhan.prototype, "so_tin_chi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HocPhan.prototype, "id_chuyen_nganh", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => chuyen_nganh_entity_1.ChuyenNganh, (chuyenNganh) => chuyenNganh.id),
    (0, typeorm_1.JoinColumn)({ name: 'id_chuyen_nganh' }),
    __metadata("design:type", chuyen_nganh_entity_1.ChuyenNganh)
], HocPhan.prototype, "chuyenNganh", void 0);
HocPhan = __decorate([
    (0, typeorm_1.Entity)('HocPhan')
], HocPhan);
exports.HocPhan = HocPhan;
//# sourceMappingURL=hoc_phan.entity.js.map