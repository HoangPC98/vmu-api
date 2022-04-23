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
exports.GoogleAuthDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class GoogleAuthDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjAzZTg0YWVkNGVmNDQzMTAxNGU4NjE3NTY3ODY0YzRlZmFhYWVkZTkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiODE4MTQ4MDk2MTcyLTdnNDVyNzBucGljM29uZmFkODl2cHFsa3R2aGhwYWIxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiODE4MTQ4MDk2MTcyLTdnNDVyNzBucGljM29uZmFkODl2cHFsa3R2aGhwYWIxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA0MTc3OTg0OTcxOTkwMzMwNjUyIiwiaGQiOiJtaXJhYm8uY29tLnZuIiwiZW1haWwiOiJwaHVjbG1AbWlyYWJvLmNvbS52biIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoieGVKaWhxVTRvWjI1RmdPUWE3RUFTZyIsIm5hbWUiOiJQaMO6YyBMw6ogTWluaCIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQVRYQUp5ZHFMZGZLWGZfVlFzN3hDS2xxR2swd3lVNGswN1hMWkZqaXptUD1zOTYtYyIsImdpdmVuX25hbWUiOiJQaMO6YyIsImZhbWlseV9uYW1lIjoiTMOqIE1pbmgiLCJsb2NhbGUiOiJlbiIsImlhdCI6MTY0MDk0OTk1OCwiZXhwIjoxNjQwOTUzNTU4LCJqdGkiOiI2OTIyZjc0MDkxNzRjYTc5NDE1NzM0NzllYzUzODMzZjE5NDg1YjEzIn0.j1hn75HjdFSqWFdEF3vxnHuiMcu55lPVBR2eU09Q7LZIelml7L9wei3oATMmwHKZhaXak7NMM8YRv_VqXgrlJuE2zACxX0vH3PHIlnNFGkvWbfSSHQWbB0SGEf0QrXzzTSDvS0xSd2VLcDFoxyEFVBNo7HFrNBMpCwATZiHN4x0ZK4PYrx3xHALv4chyu6G-fT1Cl3RMQVItHU7ooMi_fQzqdkWBlPTYPGgVN6MJ9W4mc8vvn_zSy0liC6O8Qz-JAEc2Y90MF4LjIU0SrrC4eIanmRIznfdmOBXS0GyxQdeRzthUy1dV3Aed1KCtBjX7-4aAUZfk-NUNtmgYQRFw7g',
        description: 'the token received after login google successful',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GoogleAuthDto.prototype, "googleToken", void 0);
exports.GoogleAuthDto = GoogleAuthDto;
//# sourceMappingURL=googleAuth.dto.js.map