/// <reference types="mongoose" />
import { BookmarksService } from './bookmarks.service';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
export declare class BookmarksController {
    private bookmarksService;
    constructor(bookmarksService: BookmarksService);
    isExist(articleId: string, userId: string): Promise<boolean>;
    save(createBookmarkDto: CreateBookmarkDto): Promise<import("mongoose").Document<any, any, import("./bookmarks.schema").BookmarkDocument> & import("./bookmarks.schema").Bookmark & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    delete(articleId: string, userId: string): Promise<import("mongodb").DeleteResult>;
}
