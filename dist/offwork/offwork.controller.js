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
exports.OffworkController = void 0;
const common_1 = require("@nestjs/common");
const offwork_service_1 = require("./offwork.service");
const create_offwork_dto_1 = require("./dto/create-offwork.dto");
const update_offwork_dto_1 = require("./dto/update-offwork.dto");
const swagger_1 = require("@nestjs/swagger");
const getall_offwork_query_1 = require("./dto/getall-offwork.query");
const CheckPolicies_1 = require("../casl/decorators/CheckPolicies");
const Action_1 = require("../casl/Action");
const offwork_entity_1 = require("../database/entities/offwork.entity");
let OffworkController = class OffworkController {
    constructor(offworkService) {
        this.offworkService = offworkService;
    }
    async create(createOffworkDto) {
        const offworkRec = await this.offworkService.create(createOffworkDto);
        return {
            message: 'success',
            result: offworkRec,
        };
    }
    async findAll(getAllOffworkQuery) {
        const offworkRecs = await this.offworkService.findAll(getAllOffworkQuery);
        return {
            message: 'success',
            result: offworkRecs,
        };
    }
    findOne(id) {
        return this.offworkService.findOne(+id);
    }
    update(id, updateOffworkDto) {
        return this.offworkService.update(+id, updateOffworkDto);
    }
    remove(id) {
        return this.offworkService.remove(+id);
    }
};
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)(),
    (0, CheckPolicies_1.CheckPolicies)((ability) => {
        return ability.can(Action_1.Action.Create, offwork_entity_1.Offwork.name);
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_offwork_dto_1.CreateOffworkDto]),
    __metadata("design:returntype", Promise)
], OffworkController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, CheckPolicies_1.CheckPolicies)((ability) => ability.can(Action_1.Action.Read, offwork_entity_1.Offwork.name)),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getall_offwork_query_1.GetAllOffworkQuery]),
    __metadata("design:returntype", Promise)
], OffworkController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OffworkController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_offwork_dto_1.UpdateOffworkDto]),
    __metadata("design:returntype", void 0)
], OffworkController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OffworkController.prototype, "remove", null);
OffworkController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('offwork'),
    (0, common_1.Controller)('offworks'),
    __metadata("design:paramtypes", [offwork_service_1.OffworkService])
], OffworkController);
exports.OffworkController = OffworkController;
//# sourceMappingURL=offwork.controller.js.map