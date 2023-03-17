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
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const articles_schema_1 = require("../articles/articles.schema");
const articles_service_1 = require("../articles/articles.service");
const comments_schema_1 = require("./comments.schema");
let CommentsService = class CommentsService {
    constructor(commentModel, articleService) {
        this.commentModel = commentModel;
        this.articleService = articleService;
    }
    findAll() {
        return this.commentModel.find();
    }
    delete() {
        return this.commentModel.deleteMany({});
    }
    async findByArticle(article_id) {
        const article = await this.articleService.findOne(article_id);
        return await this.commentModel.find({ article }).populate('author');
    }
    async create(createCommentDto) {
        const createComment = new this.commentModel(createCommentDto);
        return await (await createComment.save()).populate('author');
    }
};
CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(comments_schema_1.Comment.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        articles_service_1.ArticlesService])
], CommentsService);
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map