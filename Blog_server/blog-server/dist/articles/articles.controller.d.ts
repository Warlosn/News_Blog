/// <reference types="mongoose" />
import { ArticlesService } from './articles.service';
import { CrerateArticleDto } from './dto/create-article.dto';
export declare class ArticlesController {
    private articleService;
    constructor(articleService: ArticlesService);
    findAll(req: any): import("mongoose").Query<(import("mongoose").Document<any, any, import("./articles.schema").ArticleDocument> & import("./articles.schema").Article & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<any, any, import("./articles.schema").ArticleDocument> & import("./articles.schema").Article & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./articles.schema").ArticleDocument>;
    findOne(id: string): Promise<import("./articles.schema").Article>;
    create(crerateArticleDto: CrerateArticleDto): Promise<import("./articles.schema").Article>;
    delete(id: string): Promise<import("./articles.schema").Article>;
}
