import { useState } from "react";
import { Oval } from "react-loader-spinner";
import { useIssues } from "../../hooks/useIssues";
import { defaultTheme } from "../PageInfo/components/ProfileInfo";
import PostCard from "./PostCard";
import Search from "./Search";
import { LoaderContainer, PostsContainer } from "./styled";

const Post = () => {
  const { issues } = useIssues();
  const [inputValue, setInputValue] = useState("");
  const publishs = issues.length;

  function onChangeInputValue(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  const filteredIssues = issues.filter((issue) => {
    const search = inputValue.toLowerCase();
    const { title, body } = issue;

    return (
      title.toLowerCase().includes(search) ||
      body.toLowerCase().includes(search)
    );
  });

  return (
    <>
      {issues.length > 0 ? (
        <>
          <Search
            publishs={publishs}
            onChangeInputValue={onChangeInputValue}
            inputValue={inputValue}
          />
          <PostsContainer>
            {filteredIssues.map((issue) => (
              <PostCard key={issue.id} issue={issue} />
            ))}
          </PostsContainer>
        </>
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
