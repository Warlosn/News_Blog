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
exports.BookmarksService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const articles_schema_1 = require("../articles/articles.schema");
const articles_service_1 = require("../articles/articles.service");
const users_schema_1 = require("../user/users.schema");
const users_service_1 = require("../user/users.service");
const bookmarks_schema_1 = require("./bookmarks.schema");
let BookmarksService = class BookmarksService {
    constructor(bookmarksModel, articleService, usersService) {
        this.bookmarksModel = bookmarksModel;
        this.articleService = articleService;
        this.usersService = usersService;
    }
    async isBookmarkExist(article_id, user_id) {
        const article = await this.articleService.findOne(article_id);
        const user = await this.usersService.findOne(user_id);
        if (!user || !article) {
            throw new common_1.NotFoundException();
        }
        const bookmark = await this.bookmarksModel.findOne({
            article,
            user,
        });
        return bookmark ? true : false;
    }
    save(createBookmarkDto) {
        const createBookmark = new this.bookmarksModel(createBookmarkDto);
        return createBookmark.save();
    }
    async delete(article_id, user_id) {
        const article = await this.articleService.findOne(article_id);
        const user = await this.usersService.findOne(user_id);
        if (!user || !article) {
            throw new common_1.NotFoundException();
        }
        return await this.bookmarksModel.deleteOne({ user, article });
    }
};
BookmarksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(bookmarks_schema_1.Bookmark.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        articles_service_1.ArticlesService,
        users_service_1.UsersService])
], BookmarksService);
exports.BookmarksService = BookmarksService;
//# sourceMappingURL=bookmarks.service.js.map