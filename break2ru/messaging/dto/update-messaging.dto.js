"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMessagingDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_messaging_dto_1 = require("./create-messaging.dto");
class UpdateMessagingDto extends (0, mapped_types_1.PartialType)(create_messaging_dto_1.CreateMessagingDto) {
}
exports.UpdateMessagingDto = UpdateMessagingDto;
//# sourceMappingURL=update-messaging.dto.js.map