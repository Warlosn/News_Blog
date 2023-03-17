import * as mongoose from 'mongoose';
import { Article } from 'src/articles/articles.schema';
import { Role } from 'src/roles/role.enum';
export declare type UserDocument = User & Document;
export declare class User {
    name: string;
    password: string;
    photo: string;
    roles: Role[];
    activate: boolean;
    bookmarks: Article;
}
export declare const UserSchema: mongoose.Schema<mongoose.Document<User, any, any>, mongoose.Model<mongoose.Document<User, any, any>, any, any, any>, {}>;
