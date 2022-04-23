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
exports.AccessTokenDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class AccessTokenDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik5ndXnhu4VuIMSQ4bupYyBN4bqhbmgiLCJzdWIiOjIsInVzZXJfdHlwZV9pZCI6MTIsInBlcm1pc3Npb25zIjoiW3t9XSIsInJvbGUiOiJ1c2VyIiwiZW1haWwiOiJtYW5obmRAbWlyYWJvLmNvbS52biIsImdpdmVuYW1lIjoiTeG6oW5oIiwicGhvbmUiOiIzMjQyMzQyNDMiLCJpYXQiOjE2NDE5OTMzOTIsImV4cCI6MTY0MjU5ODE5Mn0.DPTPfVOWk6ATJMLVaaWoKxAK_xl_75cUOSduF92BOVo',
        description: 'the access token using to verify',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AccessTokenDto.prototype, "accessToken", void 0);
exports.AccessTokenDto = AccessTokenDto;
//# sourceMappingURL=verifyAtoken.dto.js.map