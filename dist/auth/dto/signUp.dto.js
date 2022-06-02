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
exports.SignUpDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const enum_types_1 = require("../../dataTypes/enum.types");
class SignUpDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'hoangpc',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignUpDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '123456',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignUpDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Nguyen Hoang Hai',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignUpDto.prototype, "ho_ten", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'hai68510@st.vimaru.edu.vn',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignUpDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: enum_types_1.Role.GeneralUser,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)([enum_types_1.Role.GeneralUser, enum_types_1.Role.Admin, enum_types_1.Role.GiangVien, enum_types_1.Role.HocVien]),
    __metadata("design:type", String)
], SignUpDto.prototype, "user_type", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SignUpDto.prototype, "ngay_sinh", void 0);
exports.SignUpDto = SignUpDto;
//# sourceMappingURL=signUp.dto.js.map