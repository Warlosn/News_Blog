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
exports.ArticleSchema = exports.Article = void 0;
const mongoose = require("mongoose");
const mongoose_1 = require("@nestjs/mongoose");
const users_schema_1 = require("../user/users.schema");
const tags_schema_1 = require("../tags/tags.schema");
let Article = class Article {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Article.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Article.prototype, "subtitle", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Article.prototype, "text", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Article.prototype, "img", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], Article.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], Article.prototype, "updateDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'User' }),
    __metadata("design:type", users_schema_1.User)
], Article.prototype, "author", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }] }),
    __metadata("design:type", tags_schema_1.Tag)
], Article.prototype, "tags", void 0);
Article = __decorate([
    (0, mongoose_1.Schema)()
], Article);
exports.Article = Article;
exports.ArticleSchema = mongoose_1.SchemaFactory.createForClass(Article);
//# sourceMappingURL=articles.schema.js.map