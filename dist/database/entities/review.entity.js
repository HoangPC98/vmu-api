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
exports.Review = exports.ReviewStatus = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const offwork_entity_1 = require("./offwork.entity");
const worktime_entity_1 = require("./worktime.entity");
var ReviewStatus;
(function (ReviewStatus) {
    ReviewStatus["PENDING"] = "pending";
    ReviewStatus["APPROVED"] = "approved";
    ReviewStatus["REJECTED"] = "rejected";
})(ReviewStatus = exports.ReviewStatus || (exports.ReviewStatus = {}));
let Review = class Review extends base_entity_1.default {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Review.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Review.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Review.prototype, "reviewer_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Review.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => worktime_entity_1.WorkTime, (workTime) => workTime.review),
    __metadata("design:type", worktime_entity_1.WorkTime)
], Review.prototype, "workTime", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => offwork_entity_1.Offwork, (offwork) => offwork.review),
    __metadata("design:type", offwork_entity_1.Offwork)
], Review.prototype, "offwork", void 0);
Review = __decorate([
    (0, typeorm_1.Entity)('reviews')
], Review);
exports.Review = Review;
//# sourceMappingURL=review.entity.js.map