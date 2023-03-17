import * as mongoose from 'mongoose';
import { Article } from 'src/articles/articles.schema';
import { User } from 'src/user/users.schema';
export declare type BookmarkDocument = Bookmark & Document;
export declare class Bookmark {
    user: User;
    article: Article;
}
export declare const BookmarksSchema: mongoose.Schema<mongoose.Document<Bookmark, any, any>, mongoose.Model<mongoose.Document<Bookmark, any, any>, any, any, any>, {}>;
