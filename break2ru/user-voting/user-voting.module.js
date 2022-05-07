"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserVotingModule = void 0;
const common_1 = require("@nestjs/common");
const user_voting_service_1 = require("./user-voting.service");
const user_voting_controller_1 = require("./user-voting.controller");
const typeorm_1 = require("@nestjs/typeorm");
const user_voting_entity_1 = require("./entities/user-voting.entity");
let UserVotingModule = class UserVotingModule {
};
UserVotingModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_voting_entity_1.UserVoting]),
        ],
        controllers: [user_voting_controller_1.UserVotingController],
        providers: [user_voting_service_1.UserVotingService]
    })
], UserVotingModule);
exports.UserVotingModule = UserVotingModule;
//# sourceMappingURL=user-voting.module.js.map