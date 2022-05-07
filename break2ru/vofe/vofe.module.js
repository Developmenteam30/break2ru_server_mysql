"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VofeModule = void 0;
const common_1 = require("@nestjs/common");
const vofe_service_1 = require("./vofe.service");
const vofe_controller_1 = require("./vofe.controller");
const typeorm_1 = require("@nestjs/typeorm");
const Vofe_entity_1 = require("./entities/Vofe.entity");
let VofeModule = class VofeModule {
};
VofeModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([Vofe_entity_1.Vofe]),
        ],
        controllers: [vofe_controller_1.VofeController],
        providers: [vofe_service_1.VofeService]
    })
], VofeModule);
exports.VofeModule = VofeModule;
//# sourceMappingURL=vofe.module.js.map