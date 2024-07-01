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

    // console.log("Inner Child - SocialProfileClass constructor() Called");
  }

  componentDidMount() {
    // console.log("Inner Child - SocialProfileClass componentDidMount() Called");
  }

  componentDidUpdate() {
    // console.log("Inner Child - SocialProfileClass componentDidUpdate() Called");
  }

  componentWillUnmount() {
    // console.log("Inner Child - SocialProfileClass componentWillUnmount() Called");
  }

  render() {
    // console.log("Inner Child - SocialProfileClass render() Method Called");

    return (
      <div className="social-media-container">
        <a
          href={LINKEDIN_LINK}
          className="icon-button linkedin"
          target="_blank"
        >
          <i>
            <SiLinkedin />
          </i>
        </a>
        <a href={TWITTER_LINK} className="icon-button twitter" target="_blank">
          <i>
            <SiTwitter />
          </i>
        </a>
        <a href={GiTHUB_LINK} className="icon-button github" target="_blank">
          <i>
            <SiGithub />
          </i>
        </a>
        <a href={"mailto:" + EMAIL_LINK} className="icon-button email">
          <i>
            <SiGmail />
          </i>
        </a>
      </div>
    );
  }
}

export default SocialProfileClass;
