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
exports.WorktimeService = void 0;
const common_1 = require("@nestjs/common");
const supportHandleExcel_1 = require("../helper/supportHandleExcel");
const typeorm_1 = require("@nestjs/typeorm");
const worktime_entity_1 = require("../database/entities/worktime.entity");
const worktype_entity_1 = require("../database/entities/worktype.entity");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../database/entities/user.entity");
const worktype_constant_1 = require("../constants/worktype.constant");
let WorktimeService = class WorktimeService {
    constructor(worktimeRepository, worktypeRepository, userRepository) {
        this.worktimeRepository = worktimeRepository;
        this.worktypeRepository = worktypeRepository;
        this.userRepository = userRepository;
    }
    create(createWorktimeDto) {
        return 'This action adds a new worktime';
    }
    findAll() {
        return `This action returns all worktime`;
    }
    findOne(id) {
        return `This action returns a #${id} worktime`;
    }
    update(id, updateWorktimeDto) {
        return `This action updates a #${id} worktime`;
    }
    remove(id) {
        return `This action removes a #${id} worktime`;
    }
    async createRecordFromTimekeeperData(datas) {
        for (const data of datas) {
            const idFinger = +data['C'];
            const checkinStr = data['A'] + ' ' + data['G'] + ':00';
            const checkin = (0, supportHandleExcel_1.convertCheckinout)(checkinStr);
            let checkoutStr;
            for (let i = 0; i <= supportHandleExcel_1.arrCheckout.length - 1; i++) {
                const x = data[supportHandleExcel_1.arrCheckout[i]];
                if (!x) {
                    if (data[supportHandleExcel_1.arrCheckout[i - 1]] === data['G']) {
                        checkoutStr = '';
                    }
                    else {
                        checkoutStr = data['A'] + ' ' + data[supportHandleExcel_1.arrCheckout[i - 1]] + ':00';
                    }
                    break;
                }
            }
            const checkout = (0, supportHandleExcel_1.convertCheckinout)(checkoutStr);
            const worktype = await this.worktypeRepository.findOne(worktype_constant_1.IdWorktype.Offline);
            const user = await this.userRepository.findOne({
                where: { id_finger: idFinger },
            });
            const worktimeDto = new worktime_entity_1.WorkTime();
            worktimeDto.user_id = user.id;
            worktimeDto.work_type_id = worktype.id;
            worktimeDto.checkin_at = '' + checkin;
            worktimeDto.checkout_at = '' + checkout;
            await this.worktimeRepository.save(worktimeDto);
        }
        return true;
    }
};
WorktimeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(worktime_entity_1.WorkTime)),
    __param(1, (0, typeorm_1.InjectRepository)(worktype_entity_1.WorkType)),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], WorktimeService);
exports.WorktimeService = WorktimeService;
//# sourceMappingURL=worktime.service.js.map