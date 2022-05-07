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
exports.Video = void 0;
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
const post_info_entity_1 = require("../../post-info/entities/post-info.entity");
let Video = class Video {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Primary key' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Video.prototype, "v_id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Video.prototype, "user_id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Video.prototype, "post_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_info_entity_1.PostInfo),
    (0, typeorm_1.ManyToOne)(() => post_info_entity_1.PostInfo, {
        onDelete: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Promise)
], Video.prototype, "post", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Video.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Video.prototype, "video_url", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Video.prototype, "timestamp", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Video.prototype, "views", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Video.prototype, "viewer_user", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Video.prototype, "vid", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Video.prototype, "thumbnail", void 0);
Video = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Video);
exports.Video = Video;
//# sourceMappingURL=video.entity.js.map