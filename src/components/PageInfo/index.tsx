import { ProfileBioContainer, UserInfoContainer } from "./styled";
import {
  BsBoxArrowUpRight,
  BsFillCalendarEventFill,
  BsGithub,
} from "react-icons/bs";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FiUsers } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { BiConversation } from "react-icons/bi";
import { Link } from "react-router-dom";

interface PageInfoProps {
  isProfileInfo?: boolean;
}

const PageInfo = ({ isProfileInfo = false }: PageInfoProps) => {
  return (
    <ProfileBioContainer>
      {isProfileInfo ? (
        <>
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, id dolorem? Pariatur nulla ratione fugiat quibusdam
              magni eligendi ex blanditiis! Aut reprehenderit, rem repudiandae
              unde rerum numquam quidem aliquam sed.
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
        </>
      ) : (
        <UserInfoContainer className="post-info">
          <div>
            <Link to="/">
              <IoIosArrowBack size={16} /> Voltar
            </Link>
            <a href="https://www.github.com/carlos-hr" target="_blank">
              Github
              <BsBoxArrowUpRight size={12} />
            </a>
          </div>
          <h2>JavaScript data types and data structures</h2>
          <ul>
            <li>
              <BsGithub size={18} /> user
            </li>
            <li>
              <BsFillCalendarEventFill size={18} /> Há 1 dia
            </li>
            <li>
              <BiConversation size={18} />5 comentários
            </li>
          </ul>
        </UserInfoContainer>
      )}
    </ProfileBioContainer>
  );
};

export default PageInfo;
