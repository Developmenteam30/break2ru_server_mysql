"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostInfoModule = void 0;
const common_1 = require("@nestjs/common");
const post_info_service_1 = require("./post-info.service");
const post_info_controller_1 = require("./post-info.controller");
const typeorm_1 = require("@nestjs/typeorm");
const post_info_entity_1 = require("./entities/post-info.entity");
const post_info_resolver_1 = require("./post-info.resolver");
let PostInfoModule = class PostInfoModule {
};
PostInfoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([post_info_entity_1.PostInfo]),
        ],
        controllers: [post_info_controller_1.PostInfoController],
        providers: [post_info_resolver_1.PostResolver, post_info_service_1.PostInfoService]
    })
], PostInfoModule);
exports.PostInfoModule = PostInfoModule;
//# sourceMappingURL=post-info.module.js.map