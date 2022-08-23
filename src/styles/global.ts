import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
    transition: all 0.3s;
  }

  h1, h2, h3 {
    color: ${(props) => props.theme.base_title};
  }

  body,
  input,
  textarea,
  button {
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.6;
    color: ${(props) => props.theme.base_text};
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: ${(props) => props.theme.base_background};
  }

  :focus {
    outline: 0;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
`;
