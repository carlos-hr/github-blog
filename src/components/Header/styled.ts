import styled from "styled-components";
import background from "../../assets/header-bg.png";

export const HeaderContainer = styled.header`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  height: 18.5rem;
  display: flex;
  justify-content: center;
  padding-top: 4rem;
`;
