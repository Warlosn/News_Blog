/// <reference types="mongoose" />
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create_comment.dto';
export declare class CommentsController {
    private commentService;
    constructor(commentService: CommentsService);
    findAll(): import("mongoose").Query<(import("mongoose").Document<any, any, import("./comments.schema").CommentDocument> & import("./comments.schema").Comment & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<any, any, import("./comments.schema").CommentDocument> & import("./comments.schema").Comment & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./comments.schema").CommentDocument>;
    findByAuthor(articleId: string): Promise<(import("mongoose").Document<any, any, import("./comments.schema").CommentDocument> & import("./comments.schema").Comment & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    delete(): import("mongoose").Query<import("mongodb").DeleteResult, import("mongoose").Document<any, any, import("./comments.schema").CommentDocument> & import("./comments.schema").Comment & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./comments.schema").CommentDocument>;
    create(createCommentDto: CreateCommentDto): Promise<import("./comments.schema").Comment>;
}
