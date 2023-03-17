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
exports.LikesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const role_decotator_1 = require("../roles/role.decotator");
const role_enum_1 = require("../roles/role.enum");
const roles_guard_1 = require("../roles/roles.guard");
const create_like_dto_1 = require("./dto/create-like.dto");
const likes_service_1 = require("./likes.service");
let LikesController = class LikesController {
    constructor(likeService) {
        this.likeService = likeService;
    }
    isExist(articleId, userId) {
        return this.likeService.isLikeExist(articleId, userId);
    }
    getCount(articleId) {
        return this.likeService.getLikeCountForArticle(articleId);
    }
    save(createLikeDto) {
        return this.likeService.save(createLikeDto);
    }
    delete(articleId, userId) {
        return this.likeService.delete(articleId, userId);
    }
};
__decorate([
    (0, common_1.Get)(':article_id/user/:user_id'),
    (0, role_decotator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.USER),
    __param(0, (0, common_1.Param)('article_id')),
    __param(1, (0, common_1.Param)('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], LikesController.prototype, "isExist", null);
__decorate([
    (0, common_1.Get)(':article_id'),
    (0, role_decotator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.USER),
    __param(0, (0, common_1.Param)('article_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LikesController.prototype, "getCount", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({ type: create_like_dto_1.CreateLikeDto }),
    (0, role_decotator_1.Roles)(role_enum_1.Role.USER, role_enum_1.Role.ADMIN),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_like_dto_1.CreateLikeDto]),
    __metadata("design:returntype", void 0)
], LikesController.prototype, "save", null);
__decorate([
    (0, common_1.Delete)(':article_id/user/:user_id'),
    (0, role_decotator_1.Roles)(role_enum_1.Role.USER, role_enum_1.Role.ADMIN),
    __param(0, (0, common_1.Param)('article_id')),
    __param(1, (0, common_1.Param)('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], LikesController.prototype, "delete", null);
LikesController = __decorate([
    (0, swagger_1.ApiTags)('likes'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('likes'),
    __metadata("design:paramtypes", [likes_service_1.LikesService])
], LikesController);
exports.LikesController = LikesController;
//# sourceMappingURL=likes.controller.js.map