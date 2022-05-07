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
exports.LikeCommentController = void 0;
const common_1 = require("@nestjs/common");
const like_comment_service_1 = require("./like-comment.service");
const create_like_comment_dto_1 = require("./dto/create-like-comment.dto");
const update_like_comment_dto_1 = require("./dto/update-like-comment.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../users/jwt-auth.guard");
let LikeCommentController = class LikeCommentController {
    constructor(likeCommentService) {
        this.likeCommentService = likeCommentService;
    }
    create(createLikeCommentDto) {
        return this.likeCommentService.create(createLikeCommentDto);
    }
    findAll() {
        return this.likeCommentService.findAll();
    }
    findOne(id) {
        return this.likeCommentService.findOne(+id);
    }
    update(id, updateLikeCommentDto) {
        return this.likeCommentService.update(+id, updateLikeCommentDto);
    }
    remove(id) {
        return this.likeCommentService.remove(+id);
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_like_comment_dto_1.CreateLikeCommentDto]),
    __metadata("design:returntype", void 0)
], LikeCommentController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LikeCommentController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LikeCommentController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_like_comment_dto_1.UpdateLikeCommentDto]),
    __metadata("design:returntype", void 0)
], LikeCommentController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LikeCommentController.prototype, "remove", null);
LikeCommentController = __decorate([
    (0, common_1.Controller)('like-comment'),
    __metadata("design:paramtypes", [like_comment_service_1.LikeCommentService])
], LikeCommentController);
exports.LikeCommentController = LikeCommentController;
//# sourceMappingURL=like-comment.controller.js.map