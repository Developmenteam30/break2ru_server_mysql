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
exports.PostResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const post_info_service_1 = require("./post-info.service");
const post_info_entity_1 = require("./entities/post-info.entity");
let PostResolver = class PostResolver {
    constructor(postService) {
        this.postService = postService;
    }
    findOnePost(id) {
        return this.postService.findOne(id);
    }
    removePost(id) {
        return this.postService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Query)(() => post_info_entity_1.PostInfo, { name: 'post' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PostResolver.prototype, "findOnePost", null);
__decorate([
    (0, graphql_1.Mutation)(() => post_info_entity_1.PostInfo),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PostResolver.prototype, "removePost", null);
PostResolver = __decorate([
    (0, graphql_1.Resolver)(() => post_info_entity_1.PostInfo),
    __metadata("design:paramtypes", [post_info_service_1.PostInfoService])
], PostResolver);
exports.PostResolver = PostResolver;
//# sourceMappingURL=post-info.resolver.js.map