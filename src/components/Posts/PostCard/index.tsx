import { useNavigate } from "react-router-dom";
import { useIssues } from "../../../hooks/useIssues";
import { dateFormatter } from "../../../utils/formatter";
import { PostContainer, PostContent } from "./styled";

interface PostCardProps {
  issue: {
    number: number;
    title: string;
    body: string;
    created_at: string;
  };
}

const PostCard = ({ issue }: PostCardProps) => {
  const navigate = useNavigate();
  const { fetchPageIssue } = useIssues();

  function onClickIssue(number: number) {
    fetchPageIssue(number);
    navigate(`/post/${number}`);
  }

  return (
    <PostContainer>
      <PostContent role="link" onClick={() => onClickIssue(issue.number)}>
        <div>
          <h3>{issue.title}</h3>
          <p>{dateFormatter(issue.created_at)}</p>
        </div>
        <p>{issue.body}</p>
      </PostContent>
    </PostContainer>
  );
};

export default PostCard;
