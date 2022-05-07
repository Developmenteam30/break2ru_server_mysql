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
exports.PostInfoService = void 0;
const common_1 = require("@nestjs/common");
const post_info_entity_1 = require("./entities/post-info.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let PostInfoService = class PostInfoService {
    constructor(UserModel) {
        this.UserModel = UserModel;
    }
    create(createPostInfoDto) {
        var data = this.UserModel.create(createPostInfoDto);
        return this.UserModel.save(data);
    }
    async findAll(query) {
        const take = query.take || 40;
        const skip = query.skip || 0;
        return await this.UserModel.find({
            relations: ['images', 'videos'],
            order: { post_id: "DESC" },
            take: take,
            skip: skip
        });
    }
    async findOne(id) {
        return await this.UserModel.findOne(id, {
            relations: ['images', 'videos']
        });
    }
    async findUser(id) {
        return await this.UserModel.find({
            relations: ['images', 'videos'],
            order: { post_id: "DESC" },
            where: { user: id }
        });
    }
    async findTags(id) {
        return await this.UserModel.find({
            relations: ['images', 'videos'],
            order: { post_id: "DESC" },
            where: { hashtag: (0, typeorm_2.Like)(`%${id}%`) }
        });
    }
    async update(id, updatePostInfoDto) {
        return await this.UserModel.update(id, updatePostInfoDto);
    }
    async remove(id) {
        return await this.UserModel.delete(id);
    }
};
PostInfoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(post_info_entity_1.PostInfo)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PostInfoService);
exports.PostInfoService = PostInfoService;
//# sourceMappingURL=post-info.service.js.map