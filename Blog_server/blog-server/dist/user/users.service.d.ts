import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './users.schema';
import { ArticleDocument } from 'src/articles/articles.schema';
export declare class UsersService {
    private usersModel;
    private articleModel;
    constructor(usersModel: Model<UserDocument>, articleModel: Model<ArticleDocument>);
    findAll(): import("mongoose").Query<(import("mongoose").Document<any, any, UserDocument> & User & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<any, any, UserDocument> & User & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, UserDocument>;
    findOne(id: string): Promise<User>;
    findOneByUsername(name: string): Promise<User>;
    findOneByUsernameWithPassword(name: string): Promise<User>;
    create(createUserDto: CreateUserDto): Promise<User>;
    setAdminRole(id: string): import("mongoose").Query<import("mongodb").UpdateResult, import("mongoose").Document<any, any, UserDocument> & User & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, UserDocument>;
    setUnsetActivate(id: string): Promise<import("mongodb").UpdateResult>;
    delete(id: string): Promise<User>;
}
