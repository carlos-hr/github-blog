import { Posts, PageInfo } from "../../components";
import { HomeContainer } from "./styled";

const Home = () => {
  return (
    <HomeContainer>
      <PageInfo />
      <Posts />
    </HomeContainer>
  );
};

export default Home;
