import { Article } from 'src/articles/articles.schema';
import { User } from 'src/user/users.schema';
export declare class CreateLikeDto {
    user: User;
    article: Article;
}
