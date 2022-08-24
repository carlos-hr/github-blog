import { BiConversation } from "react-icons/bi";
import {
  BsBoxArrowUpRight,
  BsGithub,
  BsFillCalendarEventFill,
} from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { SectionInfoContainer } from "../styled";

const PostInfo = () => {
  return (
    <SectionInfoContainer className="post-info">
      <div>
        <Link to="/">
          <IoIosArrowBack size={16} /> Voltar
        </Link>
        <a
          href="https://www.github.com/carlos-hr"
          target="_blank"
          rel="noreferrer"
        >
          Ver no github
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
    </SectionInfoContainer>
  );
};

export default PostInfo;
