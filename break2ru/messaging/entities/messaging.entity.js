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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Messaging = void 0;
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
const user_entity_1 = require("../../users/entities/user.entity");
const post_info_entity_1 = require("../../post-info/entities/post-info.entity");
let Messaging = class Messaging {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Primary key' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Messaging.prototype, "message_id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Messaging.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], Messaging.prototype, "image", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], Messaging.prototype, "audio", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], Messaging.prototype, "video", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_entity_1.User),
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { eager: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Promise)
], Messaging.prototype, "senderid", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_info_entity_1.PostInfo),
    (0, typeorm_1.ManyToOne)(() => post_info_entity_1.PostInfo, { eager: true, onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Promise)
], Messaging.prototype, "post", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", String)
], Messaging.prototype, "roomId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ length: 20 }),
    __metadata("design:type", String)
], Messaging.prototype, "time", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ length: 30 }),
    __metadata("design:type", String)
], Messaging.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ default: '0' }),
    __metadata("design:type", String)
], Messaging.prototype, "status", void 0);
Messaging = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Messaging);
exports.Messaging = Messaging;
//# sourceMappingURL=messaging.entity.js.map