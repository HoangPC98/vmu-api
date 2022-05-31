"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaslAbilityFactory = void 0;
const ability_1 = require("@casl/ability");
const common_1 = require("@nestjs/common");
const hoc_vien_entity_1 = require("../database/entities/hoc_vien.entity");
const hoc_phan_entity_1 = require("../database/entities/hoc_phan.entity");
const chuyen_nganh_entity_1 = require("../database/entities/chuyen_nganh.entity");
const khoa_entity_1 = require("../database/entities/khoa.entity");
const phan_quyen_entity_1 = require("../database/entities/phan_quyen.entity");
const bang_diem_entity_1 = require("../database/entities/bang_diem.entity");
const thong_bao_entity_1 = require("../database/entities/thong_bao.entity");
const user_entity_1 = require("../database/entities/user.entity");
const giang_vien_entity_1 = require("../database/entities/giang_vien.entity");
const lop_hoc_phan_entity_1 = require("../database/entities/lop_hoc_phan.entity");
const phanlop_entity_1 = require("../database/entities/phanlop.entity");
const Subjects = [
    hoc_phan_entity_1.HocPhan.name,
    lop_hoc_phan_entity_1.LopHocPhan.name,
    phanlop_entity_1.PhanLop.name,
    chuyen_nganh_entity_1.ChuyenNganh.name,
    khoa_entity_1.Khoa.name,
    chuyen_nganh_entity_1.ChuyenNganh.name,
    phan_quyen_entity_1.PhanQuyen.name,
    bang_diem_entity_1.BangDiem.name,
    thong_bao_entity_1.ThongBao.name,
    user_entity_1.User.name,
    hoc_vien_entity_1.HocVien.name,
    giang_vien_entity_1.GiangVien.name,
    'all',
];
let CaslAbilityFactory = class CaslAbilityFactory {
    createForUser(user) {
        const permissions = user.permissions;
        return new ability_1.Ability(permissions);
    }
};
CaslAbilityFactory = __decorate([
    (0, common_1.Injectable)()
], CaslAbilityFactory);
exports.CaslAbilityFactory = CaslAbilityFactory;
//# sourceMappingURL=casl-ability.factory.js.map