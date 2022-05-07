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
exports.LikeService = void 0;
const common_1 = require("@nestjs/common");
const Like_entity_1 = require("./entities/Like.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let LikeService = class LikeService {
    constructor(UserModel) {
        this.UserModel = UserModel;
    }
    create(createLikeDto) {
        var data = this.UserModel.create(createLikeDto);
        return this.UserModel.save(data);
    }
    async findAll() {
        return await this.UserModel.find();
    }
    async findOne(id) {
        return await this.UserModel.findAndCount({
            where: { post_id: id }
        });
    }
    async findOneUser(id) {
        return await this.UserModel.find({
            where: { user_id: id }
        });
    }
    async update(id, updateLikeDto) {
        return await this.UserModel.update(id, updateLikeDto);
    }
    async remove(id, post) {
        var l = await this.UserModel.findOne({
            where: { post_id: post, user_id: id }
        });
        return await this.UserModel.delete(l.like_id);
    }
};
LikeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Like_entity_1.Like)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LikeService);
exports.LikeService = LikeService;
//# sourceMappingURL=like.service.js.map