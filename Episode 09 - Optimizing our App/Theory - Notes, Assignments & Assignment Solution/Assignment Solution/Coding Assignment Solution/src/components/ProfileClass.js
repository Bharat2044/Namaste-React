import { Component } from "react";
import ProfileUserClass from "./ProfileUserClass";
import ProfileRepoClass from "./ProfileRepoClass";
import {
  GITHUB_USER_API,
  GITHUB_USERNAME,
} from "../../../../../../public/common/constants";
import "../styles/ProfileClass.css";

class profileClass extends Component {
  constructor(props) {
    super(props); // Call the super constructor with props

    // Initialize the state of the component
    this.state = {
      userInfo: {
        name: "Bharat Kumar", // default values
        bio: "Java | React.js", // default values
        followers: 5, // default values
        avatar_url:
          "https://www.dgvaishnavcollege.edu.in/dgvaishnav-c/uploads/2021/01/dummy-profile-pic.jpg",
      },
    };
  }

  async getUserInfo() {
    try {
      const response = await fetch(GITHUB_USER_API + GITHUB_USERNAME);
      const json = await response.json();

      // console.log(json);

      this.setState({
        userInfo: json,
      });
    } catch (error) {
      console.error("Error while fetching user data: ", error);
    }
  }

  componentDidMount() {
    // API Calls (Fetch Data)
    this.getUserInfo();
  }

  render() {
    const { userInfo } = this.state; // object destructuring for json data

    return (
      <div className="profile-class-container">
        <div className="profile-container">
          <h1 className="profile-title">About Me</h1>

          {/* Passing props data (full json data) from parent to child */}
          <ProfileUserClass data={userInfo} />
        </div>

        <div className="repo-container">
          <h1 className="repo-title">
            Tasty<span>Trails</span> App Repository
          </h1>

          {/* Passing props followers from parent to child */}
          <ProfileRepoClass followers={userInfo.followers} />
        </div>
      </div>
    );
  }
}

export default profileClass;
