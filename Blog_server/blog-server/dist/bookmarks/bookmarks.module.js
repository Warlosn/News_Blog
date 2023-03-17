"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarksModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const articles_schema_1 = require("../articles/articles.schema");
const articles_service_1 = require("../articles/articles.service");
const roles_guard_1 = require("../roles/roles.guard");
const users_schema_1 = require("../user/users.schema");
const users_service_1 = require("../user/users.service");
const bookmarks_controller_1 = require("./bookmarks.controller");
const bookmarks_schema_1 = require("./bookmarks.schema");
const bookmarks_service_1 = require("./bookmarks.service");
let BookmarksModule = class BookmarksModule {
};
BookmarksModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: bookmarks_schema_1.Bookmark.name, schema: bookmarks_schema_1.BookmarksSchema },
            ]),
            mongoose_1.MongooseModule.forFeature([{ name: articles_schema_1.Article.name, schema: articles_schema_1.ArticleSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: users_schema_1.User.name, schema: users_schema_1.UserSchema }]),
        ],
        controllers: [bookmarks_controller_1.BookmarksController],
        providers: [bookmarks_service_1.BookmarksService, users_service_1.UsersService, articles_service_1.ArticlesService],
        exports: [articles_service_1.ArticlesService, users_service_1.UsersService],
    })
], BookmarksModule);
exports.BookmarksModule = BookmarksModule;
//# sourceMappingURL=bookmarks.module.js.map