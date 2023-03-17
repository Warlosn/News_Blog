import { Model } from 'mongoose';
import { Article, ArticleDocument } from './articles.schema';
import { CrerateArticleDto } from './dto/create-article.dto';
export declare class ArticlesService {
    private articleModel;
    constructor(articleModel: Model<ArticleDocument>);
    findAll(): import("mongoose").Query<(import("mongoose").Document<any, any, ArticleDocument> & Article & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<any, any, ArticleDocument> & Article & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, ArticleDocument>;
    findOne(id: string): Promise<Article>;
    create(articleDto: CrerateArticleDto): Promise<Article>;
    delete(id: string): Promise<Article>;
}
