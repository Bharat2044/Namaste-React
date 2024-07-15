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
    } catch (error) {
      console.error("Error fetching repository data:", error);
    }
  }

  render() {
    const { followers } = this.props;
    const { name, description, forks_count, stargazers_count, html_url } =
      this.state.repoInfo;
    return (
      <div className="flex flex-col items-center justify-center gap-[20px] overflow-hidden bg-[#fff] p-[25px] m-[20px] shadow-[6px_6px_10px_-1px_#727171] rounded-md">
        <a
          className="text-[2rem] font-semibold px-[20px] py-[10px] text-[#ff8c00] hover:text-[#ff4500] rounded-md shadow-[6px_6px_10px_0px_#000000b5] hover:scale-[1.02] transition-all duration-300 ease-in-out"
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
        <h3 className="text-[18px] font-semibold text-[#5E5D5D] m-0">
          {description}
        </h3>
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          <div className="flex items-center justify-center gap-[20px] text-[#FF4500]">
            <h3 className="flex items-center justify-center text-[1.2rem] font-semibold gap-[5px]">
              <FiUsers />
              <span>{followers} Followers</span>
            </h3>
            <h3 className="flex items-center justify-center text-[1.2rem] font-semibold gap-[5px]">
              <BiGitRepoForked />
              <span>{forks_count} Forks</span>
            </h3>
            <h3 className="flex items-center justify-center text-[1.2rem] font-semibold gap-[5px]">
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
