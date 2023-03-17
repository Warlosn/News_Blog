import { Article } from 'src/articles/articles.schema';
import { User } from 'src/user/users.schema';
export declare class CreateBookmarkDto {
    users: User;
    article: Article;
}
