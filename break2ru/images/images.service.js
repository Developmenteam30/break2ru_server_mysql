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
exports.ImagesService = void 0;
const common_1 = require("@nestjs/common");
const image_entity_1 = require("./entities/image.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let ImagesService = class ImagesService {
    constructor(UserModel) {
        this.UserModel = UserModel;
    }
    create(createImageDto) {
        createImageDto.img_url = createImageDto.img_url.replace("https://s3-ap-south-1.amazonaws.com/soop1/", "https://d2vaqd2kfxjiiz.cloudfront.net/");
        createImageDto.thumbnail = createImageDto.thumbnail.replace("https://s3-ap-south-1.amazonaws.com/soop1/", "https://d2vaqd2kfxjiiz.cloudfront.net/");
        var data = this.UserModel.create(createImageDto);
        return this.UserModel.save(data);
    }
    async findAll() {
        return await this.UserModel.find({
            relations: ['post'],
            order: {
                'img_id': 'DESC',
            }
        });
    }
    async findOne(id) {
        return await this.UserModel.findOne(id);
    }
    async update(id, updateImageDto) {
        return await this.UserModel.update(id, updateImageDto);
    }
    async remove(id) {
        return await this.UserModel.delete(id);
    }
};
ImagesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(image_entity_1.Image)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ImagesService);
exports.ImagesService = ImagesService;
//# sourceMappingURL=images.service.js.map