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

const ChatWindow = ({ friend, messages, onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <ChatWindowContainer>
      <ChatHeader>
        <FriendImage
          src={`https://ui-avatars.com/api/?name=${friend}`}
          alt={friend}
        />
        <FriendInfo>
          <span className="friend-name">{friend}</span>
        </FriendInfo>
      </ChatHeader>
      <MessageList>
        {messages.map((msg, index) => (
          <Message key={index} isSent={msg.username === "User"}>
            <MessageUsername>{msg.username}</MessageUsername>
            <div>{msg.message}</div>
          </Message>
        ))}
      </MessageList>
      <ChatInputContainer>
        <ChatInput
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <SendButton onClick={handleSend}>Send</SendButton>
      </ChatInputContainer>
    </ChatWindowContainer>
  );
};

export default ChatWindow;
