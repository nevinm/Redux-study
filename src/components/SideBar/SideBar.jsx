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

const Sidebar = ({ friendsList, activeFriend, onFriendSelect }) => {
  return (
    <SidebarContainer>
      <SearchBox>
        <SearchInput type="text" placeholder="Search..." />
      </SearchBox>
      {friendsList.map((friend) => (
        <Friend
          key={friend}
          isActive={friend === activeFriend}
          onClick={() => onFriendSelect(friend)}
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
