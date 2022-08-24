import { memo, useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import { useIssues } from "../../hooks/useIssues";
import { defaultTheme } from "../../styles/themes/default";
import { PostContainer, LoaderContainer, PostContent } from "./styled";

const PostComponent = () => {
  const params = useParams();
  const { id } = params;
  const { issue, fetchPageIssue } = useIssues();
  const formattedIssue = issue?.body.split(/(?:\r?\n)+/);
  useEffect(() => {
    if (!issue) {
      fetchPageIssue(Number(id));
    }
  }, [fetchPageIssue, id, issue]);

  return (
    <PostContainer>
      {formattedIssue ? (
        <PostContent>
          {formattedIssue.map((issue) => (
            <p key={issue}>{issue}</p>
          ))}
        </PostContent>
      ) : (
        <LoaderContainer>
          <Oval
            color={defaultTheme.primary}
            secondaryColor={defaultTheme.primary}
          />
        </LoaderContainer>
      )}
    </PostContainer>
  );
};

const Post = memo(PostComponent);
export default Post;
