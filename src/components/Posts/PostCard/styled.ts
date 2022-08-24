import styled from "styled-components";

export const PostContainer = styled.div`
  padding: 2rem;
  background-color: ${(props) => props.theme.base_post};
  border-radius: 10px;
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 0.875rem;
    }
  }

  > p {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  :hover {
    cursor: pointer;

    > div {
      text-decoration: underline;
    }
  }
`;
