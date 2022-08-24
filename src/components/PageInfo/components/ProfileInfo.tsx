import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { useIssues } from "../../../hooks/useIssues";
import { defaultTheme } from "../../../styles/themes/default";
import { SectionInfoContainer, SkeletonContainer } from "../styled";
export { defaultTheme } from "../../../styles/themes/default";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProfileInfo = () => {
  const { profileData } = useIssues();

  return (
    <>
      {profileData ? (
        <>
          <img src={profileData.avatar_url} alt="profie-image" />
          <SectionInfoContainer>
            <div>
              <h2>{profileData.name}</h2>
              <a href={profileData.html_url} target="_blank" rel="noreferrer">
                Github
                <BsBoxArrowUpRight size={12} />
              </a>
            </div>

            <p>{profileData.bio}</p>

            <ul>
              <li>
                <BsGithub size={18} /> {profileData.login}
              </li>
              <li>
                <HiOutlineOfficeBuilding size={18} /> {profileData.company}
              </li>
              <li>
                <FiUsers size={18} />
                {profileData.followers} seguidores
              </li>
            </ul>
          </SectionInfoContainer>
        </>
      ) : (
        <SkeletonContainer>
          <Skeleton
            height={148}
            width={148}
            baseColor={defaultTheme.base_subtitle}
          />
          <div>
            <Skeleton baseColor={defaultTheme.base_subtitle} />
            <Skeleton baseColor={defaultTheme.base_subtitle} />
            <Skeleton baseColor={defaultTheme.base_subtitle} />
          </div>
        </SkeletonContainer>
      )}
    </>
  );
};

export default ProfileInfo;
