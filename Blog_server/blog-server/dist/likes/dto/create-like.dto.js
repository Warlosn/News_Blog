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
exports.CreateLikeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const articles_schema_1 = require("../../articles/articles.schema");
const users_schema_1 = require("../../user/users.schema");
class CreateLikeDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", users_schema_1.User)
], CreateLikeDto.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", articles_schema_1.Article)
], CreateLikeDto.prototype, "article", void 0);
exports.CreateLikeDto = CreateLikeDto;
//# sourceMappingURL=create-like.dto.js.map