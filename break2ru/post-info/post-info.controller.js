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
exports.PostInfoController = void 0;
const common_1 = require("@nestjs/common");
const post_info_service_1 = require("./post-info.service");
const create_post_info_dto_1 = require("./dto/create-post-info.dto");
const update_post_info_dto_1 = require("./dto/update-post-info.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../users/jwt-auth.guard");
let PostInfoController = class PostInfoController {
    constructor(postInfoService) {
        this.postInfoService = postInfoService;
    }
    create(createPostInfoDto) {
        return this.postInfoService.create(createPostInfoDto);
    }
    findAll(take, skip) {
        var query = { 'take': take, 'skip': skip };
        return this.postInfoService.findAll(query);
    }
    findOne(id) {
        return this.postInfoService.findOne(id);
    }
    findU(id) {
        return this.postInfoService.findUser(id);
    }
    findt(id) {
        return this.postInfoService.findTags(id);
    }
    update(id, updatePostInfoDto) {
        return this.postInfoService.update(id, updatePostInfoDto);
    }
    remove(id) {
        return this.postInfoService.remove(id);
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_post_info_dto_1.CreatePostInfoDto]),
    __metadata("design:returntype", void 0)
], PostInfoController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('take')),
    __param(1, (0, common_1.Param)('skip')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], PostInfoController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PostInfoController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PostInfoController.prototype, "findU", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('tags/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostInfoController.prototype, "findt", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_post_info_dto_1.UpdatePostInfoDto]),
    __metadata("design:returntype", void 0)
], PostInfoController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PostInfoController.prototype, "remove", null);
PostInfoController = __decorate([
    (0, common_1.Controller)('post-info'),
    __metadata("design:paramtypes", [post_info_service_1.PostInfoService])
], PostInfoController);
exports.PostInfoController = PostInfoController;
//# sourceMappingURL=post-info.controller.js.map