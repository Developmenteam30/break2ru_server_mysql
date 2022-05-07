"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHashtagDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_hashtag_dto_1 = require("./create-hashtag.dto");
class UpdateHashtagDto extends (0, swagger_1.PartialType)(create_hashtag_dto_1.CreateHashtagDto) {
}
exports.UpdateHashtagDto = UpdateHashtagDto;
//# sourceMappingURL=update-hashtag.dto.js.map