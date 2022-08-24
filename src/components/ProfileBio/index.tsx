import { ProfileBioContainer, UserInfoContainer } from "./styled";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FiUsers } from "react-icons/fi";

const ProfileBio = () => {
  return (
    <ProfileBioContainer>
      <img src="https://www.github.com/carlos-hr.png" alt="" />
      <UserInfoContainer>
        <div>
          <h2>Carlos Henrique</h2>
          <a href="https://www.github.com/carlos-hr" target="_blank">
            Github
            <BsBoxArrowUpRight size={12} />
          </a>
        </div>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
          id dolorem? Pariatur nulla ratione fugiat quibusdam magni eligendi ex
          blanditiis! Aut reprehenderit, rem repudiandae unde rerum numquam
          quidem aliquam sed.
        </p>

        <ul>
          <li>
            <BsGithub size={18} /> user
          </li>
          <li>
            <HiOutlineOfficeBuilding size={18} /> company
          </li>
          <li>
            <FiUsers size={18} />
            followers
          </li>
        </ul>
      </UserInfoContainer>
    </ProfileBioContainer>
  );
};

export default ProfileBio;
