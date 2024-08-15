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
  const [selectedFriend, setSelectedFriend] = useState("Zoe");
  const [chats, setChats] = useState(chatsData);

  const handleSendMessage = (message) => {
    if (selectedFriend) {
      setChats({
        ...chats,
        [selectedFriend]: [
          ...chats[selectedFriend],
          { username: "User", message, date: new Date().toLocaleString() },
        ],
      });
    }
  };

  return (
    <AppContainer>
      <Sidebar
        friends={Object.keys(chats)}
        selectedFriend={selectedFriend}
        onSelectFriend={setSelectedFriend}
      />
      {selectedFriend && (
        <ChatWindow
          friend={selectedFriend}
          messages={chats[selectedFriend]}
          onSendMessage={handleSendMessage}
        />
      )}
    </AppContainer>
  );
};

export default App;
