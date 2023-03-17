"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const articles_module_1 = require("./articles/articles.module");
const comments_module_1 = require("./comments/comments.module");
const users_module_1 = require("./user/users.module");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const tags_module_1 = require("./tags/tags.module");
const likes_module_1 = require("./likes/likes.module");
const bookmarks_module_1 = require("./bookmarks/bookmarks.module");
const auth_module_1 = require("./auth/auth.module");
const socket_module_1 = require("./gateway/socket.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath: 'app.env' }),
            mongoose_1.MongooseModule.forRoot(process.env.DB_URL || 'mongodb://127.0.0.1:27017/blog'),
            comments_module_1.CommentsModule,
            users_module_1.UsersModule,
            articles_module_1.ArticlesModule,
            tags_module_1.TagsModule,
            likes_module_1.LikesModule,
            bookmarks_module_1.BookmarksModule,
            auth_module_1.AuthModule,
            socket_module_1.SocketModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map