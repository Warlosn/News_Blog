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
exports.TagsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const role_decotator_1 = require("../roles/role.decotator");
const role_enum_1 = require("../roles/role.enum");
const roles_guard_1 = require("../roles/roles.guard");
const tags_service_1 = require("./tags.service");
let TagsController = class TagsController {
    constructor(tagService) {
        this.tagService = tagService;
    }
    findAll() {
        return this.tagService.findAll();
    }
    create(tag) {
        return this.tagService.create(tag);
    }
    delete(id) {
        return this.tagService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, role_decotator_1.Roles)(role_enum_1.Role.USER, role_enum_1.Role.ADMIN),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TagsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(':tag'),
    (0, role_decotator_1.Roles)(role_enum_1.Role.ADMIN),
    __param(0, (0, common_1.Param)('tag')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TagsController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, role_decotator_1.Roles)(role_enum_1.Role.ADMIN),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TagsController.prototype, "delete", null);
TagsController = __decorate([
    (0, swagger_1.ApiTags)('tags'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('tags'),
    __metadata("design:paramtypes", [tags_service_1.TagsService])
], TagsController);
exports.TagsController = TagsController;
//# sourceMappingURL=tags.controller.js.map