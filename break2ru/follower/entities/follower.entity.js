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
exports.Follower = void 0;
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
const user_entity_1 = require("../../users/entities/user.entity");
let Follower = class Follower {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Primary key' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Follower.prototype, "follower_id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Follower.prototype, "sender", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_entity_1.User),
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { eager: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Promise)
], Follower.prototype, "user_sender", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Follower.prototype, "receiver", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_entity_1.User),
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { eager: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Promise)
], Follower.prototype, "user_receiver", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Follower.prototype, "date_time", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Follower.prototype, "status", void 0);
Follower = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Follower);
exports.Follower = Follower;
//# sourceMappingURL=follower.entity.js.map