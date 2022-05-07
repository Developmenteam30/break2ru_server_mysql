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
exports.FollowerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const follower_entity_1 = require("./entities/follower.entity");
let FollowerService = class FollowerService {
    constructor(UserModel) {
        this.UserModel = UserModel;
    }
    async create(createFollowerDto) {
        var i = await this.UserModel.findOne({
            sender: createFollowerDto.sender,
            receiver: createFollowerDto.receiver,
        });
        if (i) {
            return await this.UserModel.delete(i.follower_id);
        }
        else {
            var data = this.UserModel.create(createFollowerDto);
            return await this.UserModel.save(data);
        }
    }
    async follow(createFollowerDto) {
        var i = await this.UserModel.findOne({
            sender: createFollowerDto.sender,
            receiver: createFollowerDto.receiver,
        });
        if (i) {
            return { status: 0, msg: 'Already following' };
        }
        else {
            var data = this.UserModel.create(createFollowerDto);
            return await this.UserModel.save(data);
        }
    }
    async findAll() {
        return await this.UserModel.find();
    }
    async findOne(id) {
        return await this.UserModel.find({
            where: { receiver: id }
        });
    }
    async findFollowings(id) {
        return await this.UserModel.find({
            where: { sender: id }
        });
    }
    async update(id, updateFollowerDto) {
        return await this.UserModel.update(id, updateFollowerDto);
    }
    async remove(id) {
        return await this.UserModel.delete(id);
    }
};
FollowerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(follower_entity_1.Follower)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FollowerService);
exports.FollowerService = FollowerService;
//# sourceMappingURL=follower.service.js.map