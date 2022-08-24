import { useNavigate } from "react-router-dom";
import { useIssues } from "../../../hooks/useIssues";
import { PostContainer, PostContent } from "./styled";

interface PostCardProps {
  issue: {
    number: number;
    title: string;
    body: string;
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
          <p>Há 1 dia</p>
        </div>
        <p>{issue.body}</p>
      </PostContent>
    </PostContainer>
  );
};

export default PostCard;
