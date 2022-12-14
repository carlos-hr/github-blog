import styled from "styled-components";

export const ProfileBioContainer = styled.div`
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

  @media (max-width: 768px) {
    flex-direction: column;
    height: fit-content;
    padding: 1rem 2rem;
  }
`;

export const SectionInfoContainer = styled.div`
  width: 100%;

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

      time::first-letter {
        text-transform: capitalize;
      }
    }

    @media (max-width: 768px) {
      max-width: 100%;
      flex-wrap: wrap;
      gap: 2rem;
    }
  }

  &.post-info {
    a {
      display: flex;
      align-items: flex-start;
      gap: 0.25rem;
    }

    h2 {
      padding-top: 1.25rem;
    }
  }
`;

export const SkeletonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    height: fit-content;
    padding: 1rem 2rem;
  }

  > div {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 3fr 1fr;
    width: 100%;
    gap: 0.5rem;

    span {
      height: 100%;
    }
  }
`;
