import { Component } from "react";
import SocialProfileClass from "./SocialProfileClass";
import { GiTHUB_LINK } from "../../../../../../public/common/constants";

class ProfileUserClass extends Component {
  constructor(props) {
    super(props); // Call the super constructor with props
  }

  render() {
    const { name, avatar_url, bio } = this.props.data; // accessing full json data as props from parent class `ProfileClass`

    return (
      <div className="profile-user-card">
        <a href={GiTHUB_LINK} target="_blank">
          <img
            className="profile-user-img"
            src={avatar_url}
            alt={name}
            title={name}
          />
          <h2>{name}</h2>
        </a>
        <p className="profile-user-bio">{bio}</p>
        <SocialProfileClass />
      </div>
    );
  }
}

export default ProfileUserClass;
