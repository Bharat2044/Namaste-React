import { Component } from "react";
import {
  LINKEDIN_LINK,
  GiTHUB_LINK,
  TWITTER_LINK,
  EMAIL_LINK,
} from "../../../../../../public/common/constants";
import { SiGmail, SiLinkedin, SiGithub, SiTwitter } from "react-icons/si";

class SocialProfileClass extends Component {
  constructor(props) {
    super(props); // Call the super constructor with props
  }

  render() {
    return (
      <div className="text-[2rem] w-full flex justify-center items-center gap-[7%]">
        <a href={LINKEDIN_LINK} target="_blank">
          <i className="text-white bg-[#0a66c2] flex items-center justify-center h-[2.6rem] w-[2.6rem] rounded-[50%] text-[1.2rem] leading-[3rem] hover:scale-[1.05] transition-transform duration-300 ease-in-out">
            <SiLinkedin />
          </i>
        </a>
        <a
          href={TWITTER_LINK}
          className="text-white bg-[#00acee] flex items-center justify-center h-[2.6rem] w-[2.6rem] rounded-[50%] text-[1.2rem] leading-[3rem] hover:scale-[1.05] transition-transform duration-300 ease-in-out"
          target="_blank"
        >
          <i>
            <SiTwitter />
          </i>
        </a>
        <a
          href={GiTHUB_LINK}
          className="text-white bg-[#333] flex items-center justify-center h-[2.6rem] w-[2.6rem] rounded-[50%] text-[1.2rem] leading-[3rem] hover:scale-[1.05] transition-transform duration-300 ease-in-out"
          target="_blank"
        >
          <i>
            <SiGithub />
          </i>
        </a>
        <a
          href={"mailto:" + EMAIL_LINK}
          className="text-white bg-[#ea4335] flex items-center justify-center h-[2.6rem] w-[2.6rem] rounded-[50%] text-[1.2rem] leading-[3rem] hover:scale-[1.05] transition-transform duration-300 ease-in-out"
        >
          <i>
            <SiGmail />
          </i>
        </a>
      </div>
    );
  }
}

export default SocialProfileClass;
