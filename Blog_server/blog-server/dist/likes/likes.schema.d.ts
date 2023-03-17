import * as mongoose from 'mongoose';
import { Article } from 'src/articles/articles.schema';
import { User } from 'src/user/users.schema';
export declare type LikeDocument = Like & Document;
export declare class Like {
    user: User;
    article: Article;
}
export declare const LikeSchema: mongoose.Schema<mongoose.Document<Like, any, any>, mongoose.Model<mongoose.Document<Like, any, any>, any, any, any>, {}>;
