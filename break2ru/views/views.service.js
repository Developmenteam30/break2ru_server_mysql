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
exports.ViewsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const view_entity_1 = require("./entities/view.entity");
let ViewsService = class ViewsService {
    constructor(UserModel) {
        this.UserModel = UserModel;
    }
    create(createViewDto) {
        var data = this.UserModel.create(createViewDto);
        return this.UserModel.save(data);
    }
    async findAll() {
        return await this.UserModel.find();
    }
    async findOne(id, type) {
        return await this.UserModel.find({
            order: { view_id: "DESC" },
            where: { data_id: id, type: type }
        });
    }
    update(id, updateViewDto) {
        return `This action updates a #${id} view`;
    }
    async remove(id) {
        return await this.UserModel.delete(id);
    }
};
ViewsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(view_entity_1.View)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ViewsService);
exports.ViewsService = ViewsService;
//# sourceMappingURL=views.service.js.map