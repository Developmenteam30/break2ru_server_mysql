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
exports.CreatePostInfoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../../users/entities/user.entity");
const graphql_1 = require("@nestjs/graphql");
const create_user_dto_1 = require("../../users/dto/create-user.dto");
let CreatePostInfoDto = class CreatePostInfoDto {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Primary key' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePostInfoDto.prototype, "post_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => create_user_dto_1.CreateUserDto),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Promise)
], CreatePostInfoDto.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePostInfoDto.prototype, "user_id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePostInfoDto.prototype, "share_id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePostInfoDto.prototype, "share_user_name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePostInfoDto.prototype, "post_type", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePostInfoDto.prototype, "text", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePostInfoDto.prototype, "hashtag", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePostInfoDto.prototype, "userstag", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePostInfoDto.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePostInfoDto.prototype, "privacy", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePostInfoDto.prototype, "likes", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreatePostInfoDto.prototype, "comment", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreatePostInfoDto.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], CreatePostInfoDto.prototype, "date_time", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], CreatePostInfoDto.prototype, "time_stamp", void 0);
CreatePostInfoDto = __decorate([
    (0, graphql_1.InputType)()
], CreatePostInfoDto);
exports.CreatePostInfoDto = CreatePostInfoDto;
//# sourceMappingURL=create-post-info.dto.js.map