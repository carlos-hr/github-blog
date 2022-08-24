import { useIssues } from "../../hooks/useIssues";
import PostCard from "./PostCard";
import Search from "./Search";
import { PostsContainer } from "./styled";

const Post = () => {
  const { issues } = useIssues();
  return (
    <>
      <Search />
      <PostsContainer>
        {issues.map((issue) => (
          <PostCard key={issue.id} issue={issue} />
        ))}
      </PostsContainer>
    </>
  );
};

export default Post;
