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
exports.PhanQuyen = exports.Role = exports.Action = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const user_entity_1 = require("./user.entity");
var Action;
(function (Action) {
    Action["CREATE"] = "create";
    Action["READ"] = "read";
    Action["UPDATE"] = "update";
    Action["DELETE"] = "delete";
    Action["ACCESS_API"] = "access_api";
})(Action = exports.Action || (exports.Action = {}));
var Role;
(function (Role) {
    Role["GeneralUser"] = "general_user";
    Role["HocVien"] = "hoc_vien";
    Role["GiangVien"] = "giang_vien";
    Role["Admin"] = "admin";
})(Role = exports.Role || (exports.Role = {}));
let PhanQuyen = class PhanQuyen extends base_entity_1.default {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], PhanQuyen.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PhanQuyen.prototype, "mo_ta", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { array: true }),
    __metadata("design:type", Object)
], PhanQuyen.prototype, "quyen", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_entity_1.User, (user) => user.role),
    (0, typeorm_1.JoinColumn)({ name: 'role' }),
    __metadata("design:type", Array)
], PhanQuyen.prototype, "user", void 0);
PhanQuyen = __decorate([
    (0, typeorm_1.Entity)('PhanQuyen')
], PhanQuyen);
exports.PhanQuyen = PhanQuyen;
//# sourceMappingURL=phan_quyen.entity.js.map