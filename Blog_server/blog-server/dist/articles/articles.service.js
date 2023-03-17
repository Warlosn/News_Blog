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
exports.ArticlesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const socket_gateway_1 = require("../gateway/socket.gateway");
const articles_schema_1 = require("./articles.schema");
let ArticlesService = class ArticlesService {
    constructor(articleModel) {
        this.articleModel = articleModel;
    }
    findAll() {
        return this.articleModel.find().populate('author').populate('tags');
    }
    async findOne(id) {
        const article = await this.articleModel.findById(id);
        if (!article) {
            throw new common_1.NotFoundException();
        }
        return article;
    }
    async create(articleDto) {
        const article = await this.articleModel.findOne({
            title: articleDto.title,
            subtitle: articleDto.subtitle,
        });
        if (article) {
            throw new common_1.HttpException('Post with such title and subtitle exists', 409);
        }
        const newArticle = new this.articleModel(articleDto);
        return newArticle.save();
    }
    async delete(id) {
        const article = await this.articleModel.findByIdAndDelete(id);
        if (!article) {
            throw new common_1.NotFoundException();
        }
        return article;
    }
};
ArticlesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(articles_schema_1.Article.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ArticlesService);
exports.ArticlesService = ArticlesService;
//# sourceMappingURL=articles.service.js.map