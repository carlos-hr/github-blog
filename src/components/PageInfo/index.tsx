import { ProfileBioContainer } from "./styled";
import { useLocation } from "react-router-dom";
import ProfileInfo from "./components/ProfileInfo";
import PostInfo from "./components/PostInfo";

const PageInfo = () => {
  const { pathname } = useLocation();
  const isProfileInfo = pathname === "/";

  return (
    <ProfileBioContainer>
      {isProfileInfo ? <ProfileInfo /> : <PostInfo />}
    </ProfileBioContainer>
  );
};

export default PageInfo;
