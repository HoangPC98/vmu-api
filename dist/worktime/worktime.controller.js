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
exports.WorktimeController = void 0;
const common_1 = require("@nestjs/common");
const worktime_service_1 = require("./worktime.service");
const create_worktime_dto_1 = require("./dto/create-worktime.dto");
const update_worktime_dto_1 = require("./dto/update-worktime.dto");
let WorktimeController = class WorktimeController {
    constructor(worktimeService) {
        this.worktimeService = worktimeService;
    }
    create(createWorktimeDto) {
        return this.worktimeService.create(createWorktimeDto);
    }
    findAll() {
        return this.worktimeService.findAll();
    }
    findOne(id) {
        return this.worktimeService.findOne(+id);
    }
    update(id, updateWorktimeDto) {
        return this.worktimeService.update(+id, updateWorktimeDto);
    }
    remove(id) {
        return this.worktimeService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_worktime_dto_1.CreateWorktimeDto]),
    __metadata("design:returntype", void 0)
], WorktimeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WorktimeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WorktimeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_worktime_dto_1.UpdateWorktimeDto]),
    __metadata("design:returntype", void 0)
], WorktimeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WorktimeController.prototype, "remove", null);
WorktimeController = __decorate([
    (0, common_1.Controller)('worktime'),
    __metadata("design:paramtypes", [worktime_service_1.WorktimeService])
], WorktimeController);
exports.WorktimeController = WorktimeController;
//# sourceMappingURL=worktime.controller.js.map