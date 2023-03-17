import * as mongoose from 'mongoose';
import { User } from 'src/user/users.schema';
import { Tag } from 'src/tags/tags.schema';
export declare type ArticleDocument = Article & Document;
export declare class Article {
    title: string;
    subtitle: string;
    text: string;
    img: string;
    date: Date;
    updateDate: Date;
    author: User;
    tags: Tag;
}
export declare const ArticleSchema: mongoose.Schema<mongoose.Document<Article, any, any>, mongoose.Model<mongoose.Document<Article, any, any>, any, any, any>, {}>;
