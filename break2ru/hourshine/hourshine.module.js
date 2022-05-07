"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HourshineModule = void 0;
const common_1 = require("@nestjs/common");
const hourshine_service_1 = require("./hourshine.service");
const hourshine_controller_1 = require("./hourshine.controller");
const typeorm_1 = require("@nestjs/typeorm");
const hourshine_entity_1 = require("./entities/hourshine.entity");
let HourshineModule = class HourshineModule {
};
HourshineModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([hourshine_entity_1.Hourshine]),
        ],
        controllers: [hourshine_controller_1.HourshineController],
        providers: [hourshine_service_1.HourshineService]
    })
], HourshineModule);
exports.HourshineModule = HourshineModule;
//# sourceMappingURL=hourshine.module.js.map