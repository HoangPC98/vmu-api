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
const getCurrentUser_auth_1 = require("./decorators/getCurrentUser.auth");
const public_auth_1 = require("./decorators/public.auth");
const login_dto_1 = require("./dto/login.dto");
const signUp_dto_1 = require("./dto/signUp.dto");
const verifyAtoken_dto_1 = require("./dto/verifyAtoken.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async signUp(signUpBody) {
        return await this.authService.signUp(signUpBody);
    }
    async login(loginDto) {
        const token = await this.authService.login(loginDto.username, loginDto.password);
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
    async logOut(userLoggedin) {
        await this.authService.logOut(userLoggedin);
        return {
            message: 'logout success',
        };
    }
};
__decorate([
    (0, public_auth_1.Public)(),
    (0, common_1.Post)('sign-up'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signUp_dto_1.SignUpDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
__decorate([
    (0, public_auth_1.Public)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'return access token and refresh token',
    }),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
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
__decorate([
    (0, swagger_1.ApiOkResponse)({ description: 'logout success' }),
    (0, common_1.Get)('logout'),
    __param(0, (0, getCurrentUser_auth_1.GetCurrentUserLogin)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logOut", null);
AuthController = __decorate([
    (0, swagger_1.ApiTags)('auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map