import { Articles } from "../../article/types/articleTypes";
import { PayloadAction } from "@reduxjs/toolkit";
import { getArticleActionSuccess } from "../../Feed/articleListActions";
import { saveCommentAction } from "../../article/articlePageActions";
import { getArticleByIdActionSuccess } from "../../authorization/actions/authorizeActions";
import { addArticleSuccessAction } from "../../createArticle/actions";
import { deleteArticleSuccessAction } from "../../dashboard/actions";

const defaultArticles: Articles = [];

export default function articleReducer(
  state = defaultArticles,
  action: PayloadAction<any>
) {
  switch (action.type) {
    case getArticleActionSuccess.type:
      return [...action.payload];
    case getArticleByIdActionSuccess.type:
      return [...state, action.payload];
    case deleteArticleSuccessAction.type:
    case addArticleSuccessAction.type:
    case saveCommentAction.type:
      return [...state];
    default:
      return state;
  }
}
