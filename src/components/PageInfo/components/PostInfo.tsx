import { BiConversation } from "react-icons/bi";
import {
  BsBoxArrowUpRight,
  BsGithub,
  BsFillCalendarEventFill,
} from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { useIssues } from "../../../hooks/useIssues";
import { dateFormatter } from "../../../utils/formatter";
import { SectionInfoContainer, SkeletonContainer } from "../styled";
import { defaultTheme } from "./ProfileInfo";

const PostInfo = () => {
  const { issue } = useIssues();

  return (
    <>
      {issue ? (
        <SectionInfoContainer className="post-info">
          <div>
            <Link to="/">
              <IoIosArrowBack size={16} /> Voltar
            </Link>
            <a href={issue.html_url} target="_blank" rel="noreferrer">
              Ver no github
              <BsBoxArrowUpRight size={12} />
            </a>
          </div>
          <h2>{issue.title}</h2>
          <ul>
            <li>
              <BsGithub size={18} /> {issue.user.login}
            </li>
            <li>
              <BsFillCalendarEventFill size={18} />
              <time>{dateFormatter(issue.created_at)}</time>
            </li>
            <li>
              <BiConversation size={18} />
              {issue.comments} comentários
            </li>
          </ul>
        </SectionInfoContainer>
      ) : (
        <SkeletonContainer>
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

export default PostInfo;
