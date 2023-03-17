import { Model } from 'mongoose';
import { ArticlesService } from 'src/articles/articles.service';
import { UsersService } from 'src/user/users.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { Like, LikeDocument } from './likes.schema';
export declare class LikesService {
    private likeModele;
    private articleService;
    private usersService;
    constructor(likeModele: Model<LikeDocument>, articleService: ArticlesService, usersService: UsersService);
    getLikeByArticleAndUser(article_id: string, user_id: string): Promise<import("mongoose").Document<any, any, LikeDocument> & Like & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    isLikeExist(article_id: string, user_id: string): Promise<boolean>;
    getLikeCountForArticle(article_id: string): Promise<number>;
    save(createLikeDto: CreateLikeDto): Promise<import("mongoose").Document<any, any, LikeDocument> & Like & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    delete(article_id: string, user_id: string): Promise<import("mongodb").DeleteResult>;
}
