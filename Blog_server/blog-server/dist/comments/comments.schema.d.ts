import * as mongoose from 'mongoose';
import { User } from 'src/user/users.schema';
import { Article } from 'src/articles/articles.schema';
export declare type CommentDocument = Comment & Document;
export declare class Comment {
    text: string;
    author: User;
    article: Article;
}
export declare const CommentSchema: mongoose.Schema<mongoose.Document<Comment, any, any>, mongoose.Model<mongoose.Document<Comment, any, any>, any, any, any>, {}>;
