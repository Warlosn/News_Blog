import { Model } from 'mongoose';
import { ArticlesService } from 'src/articles/articles.service';
import { UsersService } from 'src/user/users.service';
import { Bookmark, BookmarkDocument } from './bookmarks.schema';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
export declare class BookmarksService {
    private bookmarksModel;
    private articleService;
    private usersService;
    constructor(bookmarksModel: Model<BookmarkDocument>, articleService: ArticlesService, usersService: UsersService);
    isBookmarkExist(article_id: string, user_id: string): Promise<boolean>;
    save(createBookmarkDto: CreateBookmarkDto): Promise<import("mongoose").Document<any, any, BookmarkDocument> & Bookmark & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    delete(article_id: string, user_id: string): Promise<import("mongodb").DeleteResult>;
}
