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
exports.LikesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const articles_schema_1 = require("../articles/articles.schema");
const articles_service_1 = require("../articles/articles.service");
const users_schema_1 = require("../user/users.schema");
const users_service_1 = require("../user/users.service");
const likes_schema_1 = require("./likes.schema");
let LikesService = class LikesService {
    constructor(likeModele, articleService, usersService) {
        this.likeModele = likeModele;
        this.articleService = articleService;
        this.usersService = usersService;
    }
    async getLikeByArticleAndUser(article_id, user_id) {
        const article = await this.articleService.findOne(article_id);
        const user = await this.usersService.findOne(user_id);
        return await this.likeModele.findOne({ article, user });
    }
    async isLikeExist(article_id, user_id) {
        const article = await this.articleService.findOne(article_id);
        const user = await this.usersService.findOne(user_id);
        if (!user || !article) {
            throw new common_1.NotFoundException();
        }
        const like = await this.likeModele.findOne({ article, user });
        return like ? true : false;
    }
    async getLikeCountForArticle(article_id) {
        const article = await this.articleService.findOne(article_id);
        return await this.likeModele.countDocuments({ article });
    }
    save(createLikeDto) {
        const createLike = new this.likeModele(createLikeDto);
        return createLike.save();
    }
    async delete(article_id, user_id) {
        const article = await this.articleService.findOne(article_id);
        const user = await this.usersService.findOne(user_id);
        if (!user || !article) {
            throw new common_1.NotFoundException();
        }
        return await this.likeModele.deleteOne({ article, user });
    }
};
LikesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(likes_schema_1.Like.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        articles_service_1.ArticlesService,
        users_service_1.UsersService])
], LikesService);
exports.LikesService = LikesService;
//# sourceMappingURL=likes.service.js.map