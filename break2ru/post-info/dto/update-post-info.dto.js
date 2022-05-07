"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePostInfoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_post_info_dto_1 = require("./create-post-info.dto");
class UpdatePostInfoDto extends (0, swagger_1.PartialType)(create_post_info_dto_1.CreatePostInfoDto) {
}
exports.UpdatePostInfoDto = UpdatePostInfoDto;
//# sourceMappingURL=update-post-info.dto.js.map