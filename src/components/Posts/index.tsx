import { Oval } from "react-loader-spinner";
import { useIssues } from "../../hooks/useIssues";
import { defaultTheme } from "../PageInfo/components/ProfileInfo";
import PostCard from "./PostCard";
import Search from "./Search";
import { LoaderContainer, PostsContainer } from "./styled";

const Post = () => {
  const { issues } = useIssues();

  return (
    <>
      <Search />
      {issues.length > 0 ? (
        <PostsContainer>
          {issues.map((issue) => (
            <PostCard key={issue.id} issue={issue} />
          ))}
        </PostsContainer>
      ) : (
        <LoaderContainer>
          <Oval
            color={defaultTheme.primary}
            secondaryColor={defaultTheme.primary}
          />
        </LoaderContainer>
      )}
    </>
  );
};

export default Post;
