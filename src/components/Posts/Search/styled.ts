import styled from "styled-components";

export const SearchContainer = styled.div`
  margin-top: 4.5rem;
  width: 100%;

  span {
    display: flex;
    justify-content: space-between;
    font-size: 1.125rem;
    font-weight: 700;
    color: ${(props) => props.theme.base_subtitle};

    p {
      font-size: 0.875rem;
      font-weight: 400;
      color: ${(props) => props.theme.base_span};
    }
  }

  input {
    border: 1px solid ${(props) => props.theme.base_border};
    background: ${(props) => props.theme.base_input};
    width: 100%;
    margin-top: 0.75rem;
    border-radius: 6px;
    padding: 1rem 0.75rem;

    ::placeholder {
      color: ${(props) => props.theme.base_label};
    }
  }
`;
