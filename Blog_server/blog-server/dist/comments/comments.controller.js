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
exports.CommentsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const role_decotator_1 = require("../roles/role.decotator");
const role_enum_1 = require("../roles/role.enum");
const roles_guard_1 = require("../roles/roles.guard");
const comments_service_1 = require("./comments.service");
const create_comment_dto_1 = require("./dto/create_comment.dto");
let CommentsController = class CommentsController {
    constructor(commentService) {
        this.commentService = commentService;
    }
    findAll() {
        return this.commentService.findAll();
    }
    findByAuthor(articleId) {
        return this.commentService.findByArticle(articleId);
    }
    delete() {
        return this.commentService.delete();
    }
    create(createCommentDto) {
        return this.commentService.create(createCommentDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, role_decotator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.USER),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':article_id'),
    (0, role_decotator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.USER),
    __param(0, (0, common_1.Param)('article_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "findByAuthor", null);
__decorate([
    (0, common_1.Delete)(),
    (0, role_decotator_1.Roles)(role_enum_1.Role.ADMIN),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({ type: create_comment_dto_1.CreateCommentDto }),
    (0, role_decotator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.USER),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_comment_dto_1.CreateCommentDto]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "create", null);
CommentsController = __decorate([
    (0, swagger_1.ApiTags)('comments'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('comments'),
    __metadata("design:paramtypes", [comments_service_1.CommentsService])
], CommentsController);
exports.CommentsController = CommentsController;
//# sourceMappingURL=comments.controller.js.map