/// <reference types="mongoose" />
import { CreateLikeDto } from './dto/create-like.dto';
import { LikesService } from './likes.service';
export declare class LikesController {
    private likeService;
    constructor(likeService: LikesService);
    isExist(articleId: string, userId: string): Promise<boolean>;
    getCount(articleId: string): Promise<number>;
    save(createLikeDto: CreateLikeDto): Promise<import("mongoose").Document<any, any, import("./likes.schema").LikeDocument> & import("./likes.schema").Like & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    delete(articleId: string, userId: string): Promise<import("mongodb").DeleteResult>;
}
