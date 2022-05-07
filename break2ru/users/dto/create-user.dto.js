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
exports.CreateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const graphql_1 = require("@nestjs/graphql");
const post_info_entity_1 = require("../../post-info/entities/post-info.entity");
const create_post_info_dto_1 = require("../../post-info/dto/create-post-info.dto");
let CreateUserDto = class CreateUserDto {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Primary key' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "user_id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "first_name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "last_name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "user_name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "user_email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "mob_no", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "dob", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "gender", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "bio", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "city", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "state", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "country", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "image", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "thumb_img", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "cover_photo", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "url", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "date_time", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "token_android", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "token_ios", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "followerCount", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "followingCount", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], CreateUserDto.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => create_post_info_dto_1.CreatePostInfoDto),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Promise)
], CreateUserDto.prototype, "posts", void 0);
CreateUserDto = __decorate([
    (0, graphql_1.InputType)()
], CreateUserDto);
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map