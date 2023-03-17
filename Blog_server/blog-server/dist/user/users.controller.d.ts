/// <reference types="mongoose" />
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.schema';
import { UsersService } from './users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    findAll(req: any): import("mongoose").Query<(import("mongoose").Document<any, any, import("./users.schema").UserDocument> & User & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<any, any, import("./users.schema").UserDocument> & User & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./users.schema").UserDocument>;
    findOne(id: string): Promise<User>;
    findOneByName(name: string): Promise<User>;
    create(createUserDto: CreateUserDto): Promise<User>;
    setAdminRole(id: string): import("mongoose").Query<import("mongodb").UpdateResult, import("mongoose").Document<any, any, import("./users.schema").UserDocument> & User & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./users.schema").UserDocument>;
    setUnsetActivate(id: string): Promise<import("mongodb").UpdateResult>;
    deleteOne(id: string): Promise<User>;
}
