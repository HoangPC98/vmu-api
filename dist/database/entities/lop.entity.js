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
exports.Lop = exports.HeDaoTao = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
var HeDaoTao;
(function (HeDaoTao) {
    HeDaoTao["KI_SU"] = "ki_su";
    HeDaoTao["THAC_SI"] = "thac_si";
    HeDaoTao["TIEN_SI"] = "tien_si";
})(HeDaoTao = exports.HeDaoTao || (exports.HeDaoTao = {}));
let Lop = class Lop extends base_entity_1.default {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Lop.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Lop.prototype, "he_dao_tao", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Lop.prototype, "id_chuyen_nganh", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Lop.prototype, "id_giang_vien_cn", void 0);
Lop = __decorate([
    (0, typeorm_1.Entity)('lop')
], Lop);
exports.Lop = Lop;
//# sourceMappingURL=lop.entity.js.map