import { Component } from "react";
import SocialProfileClass from "./SocialProfileClass";
import { GiTHUB_LINK } from "../../../../public/common/constants";

class ProfileUserClass extends Component {
  constructor(props) {
    super(props); // Call the super constructor with props
  }

  render() {
    const { name, avatar_url, bio } = this.props.data; // accessing full json data as props from parent class `ProfileClass`

    return (
      <div className="flex flex-col items-center justify-center gap-[20px] pt-0 px-[15px] pb-[10px]">
        <a
          href={GiTHUB_LINK}
          target="_blank"
          className="flex flex-col items-center justify-center gap-[5px]"
        >
          <img
            className="w-[180px] h-[180px] rounded-[50%] border-none cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-in-out drop-shadow-md"
            src={avatar_url}
            alt={name}
          />
          <h2 className="text-xl font-bold text-[#551A8B]">{name}</h2>
        </a>
        <p className="text-[16px] text-[#575757] font-medium">{bio}</p>
        <SocialProfileClass />
      </div>
    );
  }
}

export default ProfileUserClass;
