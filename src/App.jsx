import React, { useState } from "react";
import Sidebar from "./components/SideBar/SideBar.jsx";
import ChatWindow from "./components/ChatWindow/ChatWindow.jsx";
import styled from "styled-components";
import chatsData from "./assets/chats.json";

const AppContainer = styled.div`
  color: black;
  display: flex;
  height: 100vh;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f0f2f5;
`;

const App = () => {
  const [activeFriend, setActiveFriend] = useState("Zoe");
  const [chats, setChats] = useState(chatsData);

  const handleSendMessage = (newMessage) => {
    if (activeFriend) {
      setChats((prevChats) => ({
        ...prevChats,
        [activeFriend]: [
          ...prevChats[activeFriend],
          {
            username: "User",
            message: newMessage,
            date: new Date().toLocaleString(),
          },
        ],
      }));
    }
  };

  return (
    <AppContainer>
      <Sidebar
        friendsList={Object.keys(chats)}
        activeFriend={activeFriend}
        onFriendSelect={setActiveFriend}
      />
      {activeFriend && (
        <ChatWindow
          currentFriend={activeFriend}
          friendsList={Object.keys(chats)}
          messageHistory={chats[activeFriend]}
          onSendMessage={handleSendMessage}
        />
      )}
    </AppContainer>
  );
};

export default App;
