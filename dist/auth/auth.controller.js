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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_service_1 = require("./auth.service");
const public_auth_1 = require("./decorators/public.auth");
const googleAuth_dto_1 = require("./dto/googleAuth.dto");
const refreshToken_dto_1 = require("./dto/refreshToken.dto");
const verifyAtoken_dto_1 = require("./dto/verifyAtoken.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async loginGoogle(googleAuthDto) {
        const token = await this.authService.loginGoogle(googleAuthDto.googleToken);
        return {
            result: token,
        };
    }
    async refreshTokens(refreshTokenDto) {
        const token = await this.authService.refreshTokens(refreshTokenDto.refreshToken);
        return {
            result: token,
        };
    }
    async verifyAccessToken(accessTokenDto) {
        const validate_token = await this.authService.validateAccessToken(accessTokenDto.accessToken);
        return {
            result: validate_token,
        };
    }
};
__decorate([
    (0, public_auth_1.Public)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'return access token and refresh token',
    }),
    (0, common_1.Post)('googles'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [googleAuth_dto_1.GoogleAuthDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "loginGoogle", null);
__decorate([
    (0, public_auth_1.Public)(),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'return access token and refresh token',
    }),
    (0, common_1.Post)('refresh'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [refreshToken_dto_1.RefreshTokenDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshTokens", null);
__decorate([
    (0, public_auth_1.Public)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'verify if logged in',
    }),
    (0, common_1.Post)('verify-token'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [verifyAtoken_dto_1.AccessTokenDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyAccessToken", null);
AuthController = __decorate([
    (0, swagger_1.ApiTags)('auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map