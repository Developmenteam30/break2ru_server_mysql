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
exports.ChatsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const chat_entity_1 = require("./entities/chat.entity");
const messaging_service_1 = require("../messaging/messaging.service");
const users_service_1 = require("../users/users.service");
let ChatsService = class ChatsService {
    constructor(UserModel, messagingservice, userservice) {
        this.UserModel = UserModel;
        this.messagingservice = messagingservice;
        this.userservice = userservice;
    }
    create(createChatDto) {
        var data = this.UserModel.create(createChatDto);
        return this.UserModel.save(data);
    }
    async findAll(to) {
        return await this.UserModel.find({
            order: { chat_id: "DESC" },
            where: ("(tos = '" + to + "') OR (froms = '" + to + "')")
        });
    }
    async findOne(id, to) {
        return await this.UserModel.createQueryBuilder('chat')
            .where("(froms = :froms AND tos = :tos) OR (froms = :tos AND tos = :froms)", { froms: id, tos: to })
            .getMany();
    }
    async sendmsg(id, to, post_id) {
        var chatn = await this.UserModel.createQueryBuilder('chat')
            .where("(froms = :froms AND tos = :tos) OR (froms = :tos AND tos = :froms)", { froms: id, tos: to })
            .getOne();
        if (chatn) {
            return chatn.chat_id;
        }
        else {
            return false;
        }
    }
    update(id, updateChatDto) {
        return `This action updates a #${id} chat`;
    }
    async remove(id) {
        return await this.UserModel.delete(id);
    }
};
ChatsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(chat_entity_1.Chat)),
    __metadata("design:paramtypes", [typeorm_2.Repository, messaging_service_1.MessagingService, users_service_1.UsersService])
], ChatsService);
exports.ChatsService = ChatsService;
//# sourceMappingURL=chats.service.js.map