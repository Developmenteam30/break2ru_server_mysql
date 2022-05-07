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
exports.MessagingService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const messaging_entity_1 = require("./entities/messaging.entity");
let MessagingService = class MessagingService {
    constructor(UserModel) {
        this.UserModel = UserModel;
    }
    async create(createMessagingDto) {
        var data = await this.UserModel.create(createMessagingDto);
        return await this.UserModel.save(data);
    }
    findAll() {
        return `This action returns all messaging`;
    }
    async findOne(id) {
        return await this.UserModel.find({
            order: { message_id: 'DESC' },
            where: { roomId: id }
        });
    }
    async findOnlyOneMessaging(id) {
        return await this.UserModel.find({
            order: { message_id: 'DESC' },
            where: { roomId: id }
        });
    }
    async update(id, updateMessagingDto) {
        await this.UserModel.update(id, updateMessagingDto);
        return await this.UserModel.find({
            order: { message_id: 'DESC' },
            where: { roomId: updateMessagingDto.roomId }
        });
    }
    async remove(id) {
        return await this.UserModel.delete(id);
    }
};
MessagingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(messaging_entity_1.Messaging)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MessagingService);
exports.MessagingService = MessagingService;
//# sourceMappingURL=messaging.service.js.map