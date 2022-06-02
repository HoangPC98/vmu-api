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
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const phien_dang_nhap_entity_1 = require("../database/entities/phien_dang_nhap.entity");
const user_entity_1 = require("../database/entities/user.entity");
const phan_quyen_entity_1 = require("../database/entities/phan_quyen.entity");
let AuthService = AuthService_1 = class AuthService {
    constructor(configService, userRepository, userLogin, phanQuyenRepo, jwtService) {
        this.configService = configService;
        this.userRepository = userRepository;
        this.userLogin = userLogin;
        this.phanQuyenRepo = phanQuyenRepo;
        this.jwtService = jwtService;
        this.logger = new common_1.Logger(AuthService_1.name);
    }
    async signUp(signUpDto) {
        console.log('OKO sadfasd');
        const foundUser = await this.userRepository.findOne({
            where: { username: signUpDto.username, email: signUpDto.email },
        });
        if (foundUser)
            throw new common_1.BadRequestException('this user name or email exist, please try again');
        try {
            let newUser = new user_entity_1.User();
            newUser = Object.assign(newUser, signUpDto);
            const result = await this.userRepository.save(newUser);
            return {
                message: 'ok',
                result: result,
            };
        }
        catch (error) {
            this.logger.error(error.message);
            throw new Error(error.message);
        }
    }
    async login(username, password) {
        const FUNC_NAME = 'login';
        console.log('okokoko');
        const foundUser = await this.userRepository.findOne({
            where: { username: username, password: password },
        });
        console.log('foun', foundUser);
        if (!foundUser)
            throw new common_1.BadRequestException('wrong username of password');
        else {
            const foundUserLoggedIn = await this.userLogin.findOne({
                where: { username },
            });
            console.log('OK log in', foundUserLoggedIn);
            console.log('FOUND USER ', foundUser);
            if (foundUserLoggedIn)
                throw new common_1.BadRequestException('ban da dang nhap roi !');
            else {
                const getPhanQuyen = await this.phanQuyenRepo.findOne({
                    role: foundUser.user_type,
                });
                console.log('getPhanQuyen', getPhanQuyen);
                const payload = {
                    user_id: foundUser.id,
                    username: username,
                    email: foundUser.email,
                    permissions: getPhanQuyen.quyen,
                    user_type: foundUser.user_type,
                };
                console.log('payload', payload);
                const tokens = await this.getToken(payload);
                const newUserLoginSession = new phien_dang_nhap_entity_1.PhienDangNhap();
                newUserLoginSession.username = username;
                newUserLoginSession.token = tokens.refreshToken;
                const result = await this.userLogin.save(newUserLoginSession);
                console.log('OK log', result);
                return {
                    access_token: tokens.accessToken,
                    refresh_token: tokens.refreshToken,
                };
            }
        }
    }
    async getToken(payload) {
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(payload, {
                secret: this.configService.get('jwtAuth').access_token_secret,
                expiresIn: this.configService.get('jwtAuth').access_token_ttl,
            }),
            this.jwtService.signAsync(payload, {
                secret: this.configService.get('jwtAuth').refresh_token_secret,
                expiresIn: this.configService.get('jwtAuth').refresh_token_ttl,
            }),
        ]);
        return {
            accessToken,
            refreshToken,
        };
    }
    async getPayLoad() { }
    async logOut(userLoggedIn) {
        console.log('userloginn', userLoggedIn);
        try {
            await this.userLogin.delete({ username: userLoggedIn.username });
        }
        catch (err) {
            this.logger.error('Logout Error: ', err.message);
            throw new Error(err.message);
        }
    }
    async validateAccessToken(accessToken) {
        try {
            const validate = await this.jwtService.verify(accessToken, this.configService.get('jwtAuth').access_token_secret);
            if (!validate)
                throw new common_1.BadRequestException();
            return { is_valid: true };
        }
        catch (error) {
            throw new common_1.BadRequestException();
        }
    }
};
AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_2.InjectRepository)(phien_dang_nhap_entity_1.PhienDangNhap)),
    __param(3, (0, typeorm_2.InjectRepository)(phan_quyen_entity_1.PhanQuyen)),
    __metadata("design:paramtypes", [config_1.ConfigService,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map