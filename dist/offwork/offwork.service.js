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
var OffworkService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OffworkService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const offwork_entity_1 = require("../database/entities/offwork.entity");
const review_entity_1 = require("../database/entities/review.entity");
let OffworkService = OffworkService_1 = class OffworkService {
    constructor(offworksRepository, reviewsRepository) {
        this.offworksRepository = offworksRepository;
        this.reviewsRepository = reviewsRepository;
        this.logger = new common_1.Logger(OffworkService_1.name);
    }
    async create(createOffworkDto) {
        let reviewRec = new review_entity_1.Review();
        reviewRec.status = review_entity_1.ReviewStatus.PENDING;
        reviewRec = await this.reviewsRepository.save(reviewRec);
        this.logger.log(`created review with id: ${reviewRec.id}`);
        let offworkRec = new offwork_entity_1.Offwork();
        offworkRec.user_id = createOffworkDto.user_id;
        offworkRec.reg_start_at = createOffworkDto.reg_start_at;
        offworkRec.reg_end_at = createOffworkDto.reg_end_at;
        offworkRec.reason = createOffworkDto.reason;
        offworkRec.review_id = reviewRec.id;
        offworkRec = await this.offworksRepository.save(offworkRec);
        this.logger.log(`created offwork record with id: ${offworkRec.id}`);
        return offworkRec;
    }
    async findAll(getAllOffworkQuery) {
        this.logger.debug(`findAll with params ${JSON.stringify(getAllOffworkQuery)}`);
        const order = {};
        order[getAllOffworkQuery.order_by] = getAllOffworkQuery.order;
        const [offworkRecs, size] = await this.offworksRepository.findAndCount({
            order,
            skip: ((getAllOffworkQuery.page_number || 1) - 1) *
                getAllOffworkQuery.page_size,
            take: getAllOffworkQuery.page_size,
        });
        this.logger.debug(`findAll found ${size} records`);
        return {
            pageNumber: getAllOffworkQuery.page_number || 1,
            count: offworkRecs.length,
            data: offworkRecs,
            pages: Math.round(size / getAllOffworkQuery.page_size) || 1,
        };
    }
    async findOne(id) {
        return await this.offworksRepository.findOne(id);
    }
    async update(id, updateOffworkDto) {
        return `This action updates a #${id} offwork`;
    }
    async remove(id) {
        return await this.offworksRepository.delete(id);
    }
};
OffworkService = OffworkService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(offwork_entity_1.Offwork)),
    __param(1, (0, typeorm_1.InjectRepository)(review_entity_1.Review)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], OffworkService);
exports.OffworkService = OffworkService;
//# sourceMappingURL=offwork.service.js.map