"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatsModule = void 0;
const common_1 = require("@nestjs/common");
const chats_service_1 = require("./chats.service");
const chats_controller_1 = require("./chats.controller");
const typeorm_1 = require("@nestjs/typeorm");
const chat_entity_1 = require("./entities/chat.entity");
const messaging_service_1 = require("../messaging/messaging.service");
const messaging_entity_1 = require("../messaging/entities/messaging.entity");
const user_entity_1 = require("../users/entities/user.entity");
const users_service_1 = require("../users/users.service");
const password_entity_1 = require("../users/entities/password.entity");
const jwt_strategy_1 = require("../users/jwt.strategy");
const jwt_1 = require("@nestjs/jwt");
let ChatsModule = class ChatsModule {
};
ChatsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([chat_entity_1.Chat, messaging_entity_1.Messaging, user_entity_1.User, password_entity_1.Password]),
            jwt_1.JwtModule.register({
                secretOrPrivateKey: 'secret12356789',
            })
        ],
        controllers: [chats_controller_1.ChatsController],
        providers: [chats_service_1.ChatsService, messaging_service_1.MessagingService, users_service_1.UsersService, jwt_strategy_1.JwtStrategy]
    })
], ChatsModule);
exports.ChatsModule = ChatsModule;
//# sourceMappingURL=chats.module.js.map