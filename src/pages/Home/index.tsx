import { Posts, ProfileBio } from "../../components";
import { HomeContainer } from "./styled";

const Home = () => {
  return (
    <HomeContainer>
      <ProfileBio />
      <Posts />
    </HomeContainer>
  );
};

export default Home;
