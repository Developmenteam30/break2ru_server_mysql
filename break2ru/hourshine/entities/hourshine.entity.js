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
exports.Hourshine = void 0;
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
const user_entity_1 = require("../../users/entities/user.entity");
let Hourshine = class Hourshine {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Primary key' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Hourshine.prototype, "shine_id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Hourshine.prototype, "user_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_entity_1.User),
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { eager: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Promise)
], Hourshine.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Hourshine.prototype, "share_id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Hourshine.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Hourshine.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Hourshine.prototype, "video_url", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Hourshine.prototype, "thumbnail", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)('int', { default: 0 }),
    __metadata("design:type", Number)
], Hourshine.prototype, "views", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Hourshine.prototype, "date_time", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Hourshine.prototype, "time_Stamp", void 0);
Hourshine = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Hourshine);
exports.Hourshine = Hourshine;
//# sourceMappingURL=hourshine.entity.js.map