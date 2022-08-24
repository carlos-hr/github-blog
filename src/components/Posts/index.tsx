import PostCard from "./PostCard";
import Search from "./Search";
import { MainContainer, PostsContainer } from "./styled";

const Post = () => {
  return (
    <MainContainer>
      <Search />
      <PostsContainer>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostsContainer>
    </MainContainer>
  );
};

export default Post;
