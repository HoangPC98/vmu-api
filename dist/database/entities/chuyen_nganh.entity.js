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
exports.ChuyenNganh = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const khoa_entity_1 = require("./khoa.entity");
let ChuyenNganh = class ChuyenNganh extends base_entity_1.default {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], ChuyenNganh.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ChuyenNganh.prototype, "id_khoa", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => khoa_entity_1.Khoa, (khoa) => khoa.id),
    (0, typeorm_1.JoinColumn)({ name: 'id_khoa' }),
    __metadata("design:type", khoa_entity_1.Khoa)
], ChuyenNganh.prototype, "khoa", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ChuyenNganh.prototype, "ten_chuyen_nganh", void 0);
ChuyenNganh = __decorate([
    (0, typeorm_1.Entity)('ChuyenNghanh')
], ChuyenNganh);
exports.ChuyenNganh = ChuyenNganh;
//# sourceMappingURL=chuyen_nganh.entity.js.map