import { Component } from "react";
import {
  GITHUB_REPO_API,
  GITHUB_USERNAME,
  GITHUB_REPOSITORY_NAME,
} from "../../../../../../public/common/constants";
import { FaRegStar } from "react-icons/fa";
import { BiGitRepoForked } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";

class ProfileRepoClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repoInfo: {
        name: "Namaste-React",
        description: "Namaste React",
        forks_count: 0,
        stargazers_count: 0,
        html_url: "",
      },
    };
  }

  async componentDidMount() {
    try {
      // const response = await fetch(GITHUB_REPO_API + GITHUB_USERNAME + "/" + GITHUB_REPOSITORY_NAME);
      const response = await fetch(
        `${GITHUB_REPO_API}${GITHUB_USERNAME}/${GITHUB_REPOSITORY_NAME}`
      );

      const json = await response.json();
      this.setState({
        repoInfo: json,
      });

      // console.log(json);
    } catch (error) {
      console.error("Error fetching repository data:", error);
    }
  }

  render() {
    const { followers } = this.props;
    const { name, description, forks_count, stargazers_count, html_url } =
      this.state.repoInfo;

    return (
      <div className="profile-repo-container">
        <a
          className="repo-name"
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
        <h3 className="repo-des">{description}</h3>
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          <div className="profile-repo-items">
            <h3>
              <FiUsers />
              <span>{followers} Followers</span>
            </h3>
            <h3>
              <BiGitRepoForked />
              <span>{forks_count} Forks</span>
            </h3>
            <h3>
              <FaRegStar />
              <span>{stargazers_count} Stars</span>
            </h3>
          </div>
        </a>
      </div>
    );
  }
}

export default ProfileRepoClass;
