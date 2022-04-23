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
const user_entity_1 = require("../database/entities/user.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const google_auth_library_1 = require("google-auth-library");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
let AuthService = AuthService_1 = class AuthService {
    constructor(configService, usersRepository, jwtService) {
        this.configService = configService;
        this.usersRepository = usersRepository;
        this.jwtService = jwtService;
        this.logger = new common_1.Logger(AuthService_1.name);
        const { clientId, clientSecret } = this.configService.get('googleAuth');
        this.oAuth2Client = new google_auth_library_1.OAuth2Client(clientId, clientSecret);
    }
    async loginGoogle(googleToken) {
        const FUNC_NAME = 'loginGoogle';
        const { clientId, authorizedDomain } = this.configService.get('googleAuth');
        let ggLoginTicket;
        try {
            ggLoginTicket = await this.oAuth2Client.verifyIdToken({
                idToken: googleToken,
                audience: clientId,
            });
        }
        catch (error) {
            this.logger.error(`${FUNC_NAME} verify token on google failure: ${error}`);
            throw new common_1.UnauthorizedException();
        }
        const { hd: domain, email_verified, email } = ggLoginTicket.getPayload();
        if (domain !== authorizedDomain || !email_verified) {
            this.logger.error(`${FUNC_NAME}
          domain ${domain} not authorized or email ${email} not verified`);
            throw new common_1.UnauthorizedException();
        }
        const userRecs = await this.usersRepository.find({
            where: { email },
            relations: ['userType'],
        });
        if (!userRecs || userRecs.length <= 0) {
            this.logger.error(`${FUNC_NAME} not found user with email ${email} in database`);
            throw new common_1.UnauthorizedException();
        }
        const nameSplit = userRecs[0].name.split(' ');
        const givename = nameSplit[nameSplit.length - 1];
        const payload = {
            username: userRecs[0].name,
            sub: userRecs[0].id,
            user_type_id: userRecs[0].userType.id,
            permissions: userRecs[0].userType.permissions,
            role: userRecs[0].userType.desc,
            email: userRecs[0].email,
            givename: givename,
            phone: userRecs[0].phone,
        };
        const tokens = await this.getToken(payload);
        return {
            access_token: tokens.accessToken,
            refresh_token: tokens.refreshToken,
        };
    }
    async refreshTokens(refreshToken) {
        const IAT = 'iat';
        const EXP = 'exp';
        const payload = await this.jwtService.decode(refreshToken);
        delete payload[IAT];
        delete payload[EXP];
        const tokens = await this.getToken(payload);
        return {
            access_token: tokens.accessToken,
            refresh_token: tokens.refreshToken,
        };
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
    __metadata("design:paramtypes", [config_1.ConfigService,
        typeorm_1.Repository,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map