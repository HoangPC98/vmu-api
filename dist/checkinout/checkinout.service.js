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
exports.CheckinoutService = void 0;
const common_1 = require("@nestjs/common");
const XLSX = require("xlsx");
const path = require("path");
const worktime_service_1 = require("../worktime/worktime.service");
let CheckinoutService = class CheckinoutService {
    constructor(worktimeService) {
        this.worktimeService = worktimeService;
    }
    create(createCheckinoutDto) {
        return 'This action adds a new checkinout';
    }
    findAll() {
        return `This action returns all checkinout`;
    }
    findOne(id) {
        return `This action returns a #${id} checkinout`;
    }
    update(id, updateCheckinoutDto) {
        return `This action updates a #${id} checkinout`;
    }
    remove(id) {
        return `This action removes a #${id} checkinout`;
    }
    async handleExcelFile(filename) {
        const ROW_START_SKIP = 0;
        const ROW_END_SKIP = 3;
        const filePath = path.join(__dirname, `../../${process.env.UPLOAD_LOCATION}/${filename}`);
        const wb = XLSX.readFile(filePath);
        const sheetName = wb.SheetNames[0];
        const ws = wb.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(ws, { header: 'A', raw: false });
        data.splice(ROW_START_SKIP, ROW_END_SKIP);
        const result = await this.worktimeService.createRecordFromTimekeeperData(data);
        if (result) {
            return {
                message: 'Import file successfully.',
            };
        }
        else {
            return {
                message: 'Import file failed.',
            };
        }
    }
};
CheckinoutService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [worktime_service_1.WorktimeService])
], CheckinoutService);
exports.CheckinoutService = CheckinoutService;
//# sourceMappingURL=checkinout.service.js.map