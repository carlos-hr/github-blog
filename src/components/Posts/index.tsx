import PostCard from "./PostCard";
import Search from "./Search";
import { PostsContainer } from "./styled";

const Post = () => {
  return (
    <>
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
    </>
  );
};

export default Post;
