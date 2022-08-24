import { useNavigate } from "react-router-dom";
import { PostContainer, PostContent } from "./styled";

const PostCard = () => {
  const navigate = useNavigate();
  return (
    <PostContainer>
      <PostContent role="link" onClick={() => navigate("post")}>
        <div>
          <h3>JavaScript data types and data structures</h3>
          <p>Há 1 dia</p>
        </div>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in Programming languages
          all have built-in data structures, but these often differ from one
          language to another. This article attempts to list the built-in data
          structures available in Programming languages all have built-in data
          structures, but these often differ from one language to another. This
          article attempts to list the built-in data structures available in
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in Programming languages
          all have built-in data structures, but these often differ from one
          language to another. This article attempts to list the built-in data
          structures available in Programming languages all have built-in data
          structures, but these often differ from one language to another. This
          article attempts to list the built-in data structures available in
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in Programming languages
          all have built-in data structures, but these often differ from one
          language to another. This article attempts to list the built-in data
          structures available in Programming languages all have built-in data
          structures, but these often differ from one language to another. This
          article attempts to list the built-in data structures available in
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in
        </p>
      </PostContent>
    </PostContainer>
  );
};

export default PostCard;
