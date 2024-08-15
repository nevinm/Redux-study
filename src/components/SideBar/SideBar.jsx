import React from "react";
import {
  Friend,
  FriendImage,
  FriendInfo,
  SearchBox,
  SearchInput,
  SidebarContainer,
  Status,
} from "./SideBar";

const Sidebar = ({ friends, selectedFriend, onSelectFriend }) => {
  return (
    <SidebarContainer>
      <SearchBox>
        <SearchInput type="text" placeholder="Search..." />
      </SearchBox>
      {friends.map((friend) => (
        <Friend
          key={friend}
          isActive={friend === selectedFriend}
          onClick={() => onSelectFriend(friend)}
        >
          <FriendImage
            src={`https://ui-avatars.com/api/?name=${friend}`}
            alt={friend}
          />
          <FriendInfo>
            <span className="friend-name">{friend}</span>
          </FriendInfo>
          <Status />
        </Friend>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
