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
var MessagingGateway_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagingGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const common_1 = require("@nestjs/common");
const messaging_service_1 = require("./messaging.service");
const create_messaging_dto_1 = require("./dto/create-messaging.dto");
const update_messaging_dto_1 = require("./dto/update-messaging.dto");
let MessagingGateway = MessagingGateway_1 = class MessagingGateway {
    constructor(messagingService) {
        this.messagingService = messagingService;
        this.logger = new common_1.Logger(MessagingGateway_1.name);
    }
    handleConnection(client, ...args) {
        console.log('connected');
        this.logger.verbose(`Client Connected: ${client.id}`);
    }
    handleDisconnect(client) {
        console.log('disconnected');
        this.logger.verbose(`Client Disconnected: ${client.id}`);
    }
    joinChatRoom(client, roomId) {
        client.join(roomId);
    }
    async getmsgChatRoom(client, roomId) {
        var payload = await this.messagingService.findOne(parseInt(roomId));
        this.wss.to(roomId).emit('message.emit.oldmsgs', payload);
    }
    leaveChatRoom(client, roomId) {
        client.leave(roomId);
    }
    async handleMessage(client, payload) {
        payload.time = new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        });
        var msg = await this.messagingService.create(payload);
        this.wss.to(payload.roomId).emit('message.emit.client', msg);
    }
    create(createMessagingDto) {
        return this.messagingService.create(createMessagingDto);
    }
    findOne(id) {
        return this.messagingService.findOne(id);
    }
    async update(updateMessagingDto) {
        var msg = await this.messagingService.update(updateMessagingDto.message_id, updateMessagingDto);
        this.wss.to(updateMessagingDto.roomId).emit('message.emit.clientold', msg);
    }
    remove(id) {
        return this.messagingService.remove(id);
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], MessagingGateway.prototype, "wss", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('room.join'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, String]),
    __metadata("design:returntype", void 0)
], MessagingGateway.prototype, "joinChatRoom", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('room.getoldmsg'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, String]),
    __metadata("design:returntype", Promise)
], MessagingGateway.prototype, "getmsgChatRoom", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('room.leave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, String]),
    __metadata("design:returntype", void 0)
], MessagingGateway.prototype, "leaveChatRoom", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('message.emit.server'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, create_messaging_dto_1.CreateMessagingDto]),
    __metadata("design:returntype", Promise)
], MessagingGateway.prototype, "handleMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('createMessaging'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_messaging_dto_1.CreateMessagingDto]),
    __metadata("design:returntype", void 0)
], MessagingGateway.prototype, "create", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('findOneMessaging'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MessagingGateway.prototype, "findOne", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('updateMessaging'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_messaging_dto_1.UpdateMessagingDto]),
    __metadata("design:returntype", Promise)
], MessagingGateway.prototype, "update", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('removeMessaging'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MessagingGateway.prototype, "remove", null);
MessagingGateway = MessagingGateway_1 = __decorate([
    (0, websockets_1.WebSocketGateway)(8001, { namespace: 'messaging' }),
    __metadata("design:paramtypes", [messaging_service_1.MessagingService])
], MessagingGateway);
exports.MessagingGateway = MessagingGateway;
//# sourceMappingURL=messaging.gateway.js.map