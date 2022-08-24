import styled from "styled-components";

export const ProfileBioContainer = styled.div`
  max-width: 1120px;
  margin: auto;
  display: flex;
  background-color: ${(props) => props.theme.base_profile};
  height: 13.25rem;
  margin-top: -6.625rem;
  border-radius: 10px;
  gap: 2rem;
  align-items: center;
  padding-left: 2.5rem;
  padding-right: 2rem;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
  ul {
    list-style: none;
  }
`;

export const UserInfoContainer = styled.div`
  div {
    display: flex;
    justify-content: space-between;

    h2 {
      font-size: 1.5rem;
    }

    a {
      text-decoration: none;
      font-size: 0.75rem;
      text-transform: uppercase;
      color: ${(props) => props.theme.primary};
      font-weight: 700;

      svg {
        margin-left: 0.25rem;
      }

      :hover {
        text-decoration: underline;
      }
    }
  }

  p {
    padding-top: 0.5rem;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    max-width: 60%;
    font-size: 1rem;
    padding-top: 1.5rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }
  }
`;
