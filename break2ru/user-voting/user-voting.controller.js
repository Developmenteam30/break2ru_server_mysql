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
exports.UserVotingController = void 0;
const common_1 = require("@nestjs/common");
const user_voting_service_1 = require("./user-voting.service");
const create_user_voting_dto_1 = require("./dto/create-user-voting.dto");
const update_user_voting_dto_1 = require("./dto/update-user-voting.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../users/jwt-auth.guard");
let UserVotingController = class UserVotingController {
    constructor(userVotingService) {
        this.userVotingService = userVotingService;
    }
    create(createUserVotingDto) {
        return this.userVotingService.create(createUserVotingDto);
    }
    findAll() {
        return this.userVotingService.findAll();
    }
    findOne(id) {
        return this.userVotingService.findOne(+id);
    }
    update(id, updateUserVotingDto) {
        return this.userVotingService.update(+id, updateUserVotingDto);
    }
    remove(id) {
        return this.userVotingService.remove(+id);
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_voting_dto_1.CreateUserVotingDto]),
    __metadata("design:returntype", void 0)
], UserVotingController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserVotingController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserVotingController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_user_voting_dto_1.UpdateUserVotingDto]),
    __metadata("design:returntype", void 0)
], UserVotingController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserVotingController.prototype, "remove", null);
UserVotingController = __decorate([
    (0, common_1.Controller)('user-voting'),
    __metadata("design:paramtypes", [user_voting_service_1.UserVotingService])
], UserVotingController);
exports.UserVotingController = UserVotingController;
//# sourceMappingURL=user-voting.controller.js.map