import { Model } from 'mongoose';
import { ArticlesService } from 'src/articles/articles.service';
import { Comment, CommentDocument } from './comments.schema';
import { CreateCommentDto } from './dto/create_comment.dto';
export declare class CommentsService {
    private commentModel;
    private articleService;
    constructor(commentModel: Model<CommentDocument>, articleService: ArticlesService);
    findAll(): import("mongoose").Query<(import("mongoose").Document<any, any, CommentDocument> & Comment & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<any, any, CommentDocument> & Comment & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, CommentDocument>;
    delete(): import("mongoose").Query<import("mongodb").DeleteResult, import("mongoose").Document<any, any, CommentDocument> & Comment & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, CommentDocument>;
    findByArticle(article_id: string): Promise<(import("mongoose").Document<any, any, CommentDocument> & Comment & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    create(createCommentDto: CreateCommentDto): Promise<Comment>;
}
