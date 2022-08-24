import styled from "styled-components";

export const MainContainer = styled.main`
  max-width: 1120px;
  margin: auto;
`;

export const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 3rem;
  gap: 2rem;
`;
