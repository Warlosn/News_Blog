import { FixedSizeList as List } from "react-window";
import { cardHeight } from "../../styles/styles";
import { ListGeneratorParams } from "../types/articleTypes";
import { ArticleCommentsProps } from "../types/articlePropsTypes";
import CommentView from "./commentView";

const generateCommentRows = ({ data, index, style }: ListGeneratorParams) => {
  return <div style={{ ...style, margin: "15px 0" }}>{data[index]}</div>;
};

export default function ArticleCommentList({ comments }: ArticleCommentsProps) {
  const commentsList = comments.map((comment) => {
    return <CommentView comment={comment} />;
  });

  return commentsList.length > 0 ? (
    <List
      itemData={commentsList}
      className="commentsList"
      height={cardHeight}
      itemCount={commentsList.length}
      itemSize={150}
      width={880}
    >
      {generateCommentRows}
    </List>
  ) : (
    <div></div>
  );
}
