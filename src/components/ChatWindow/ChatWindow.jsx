import React, { useState } from "react";
import {
  ChatHeader,
  ChatInput,
  ChatInputContainer,
  ChatWindowContainer,
  FriendImage,
  FriendInfo,
  Message,
  MessageList,
  MessageUsername,
  SendButton,
} from "./ChatWindow";
import { useMemo } from "react";

const PLACEHOLDER = "Type a message...";

const ChatWindow = ({
  currentFriend,
  friendsList,
  messageHistory,
  onSendMessage,
}) => {
  const initialDraftList = useMemo(() => {
    return friendsList.reduce((acc, friend) => {
      acc[friend] = "";
      return acc;
    }, {});
  }, [friendsList]);

  const [draftList, setDraftList] = useState(initialDraftList);

  const handleInputChange = (e) => {
    setDraftList((prevDraftList) => {
      return {
        ...prevDraftList,
        [currentFriend]: e.target.value,
      };
    });
  };

  const renderChatInput = () => {
    return (
      <ChatInput
        type="text"
        value={draftList[currentFriend]}
        onChange={handleInputChange}
        placeholder={PLACEHOLDER}
      />
    );
  };

  const handleSend = () => {
    if (draftList[currentFriend].trim()) {
      onSendMessage(draftList[currentFriend]);
      setDraftList((prevDraftList) => {
        return {
          ...prevDraftList,
          [currentFriend]: "",
        };
      });
    }
  };

  return (
    <ChatWindowContainer>
      <ChatHeader>
        <FriendImage
          src={`https://ui-avatars.com/api/?name=${currentFriend}`}
          alt={currentFriend}
        />
        <FriendInfo>
          <span className="friend-name">{currentFriend}</span>
        </FriendInfo>
      </ChatHeader>
      <MessageList>
        {messageHistory.map((messageData, index) => (
          <Message key={index} isSent={messageData.username === "User"}>
            <MessageUsername>{messageData.username}</MessageUsername>
            <div>{messageData.message}</div>
          </Message>
        ))}
      </MessageList>
      <ChatInputContainer>
        {renderChatInput()}
        <SendButton onClick={handleSend}>Send</SendButton>
      </ChatInputContainer>
    </ChatWindowContainer>
  );
};

export default ChatWindow;
