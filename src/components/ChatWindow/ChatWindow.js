
import styled from "styled-components";

export const ChatWindowContainer = styled.div`
  color: black;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 700px;
  background-color: #ffffff;
`;

export const ChatHeader = styled.div`
  padding: 20px;
  background-color: #e6f7ff;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
`;

export const FriendImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 15px;
`;

export const FriendInfo = styled.div`
  flex-grow: 1;

  .friend-name {
    font-weight: bold;
  }

  .friend-status {
    font-size: 0.9em;
    color: #888;
  }
`;

export const MessageList = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: #f0f2f5;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Message = styled.div`
  background-color: ${({ isSent }) => (isSent ? '#007bff' : '#e1ffc7')};
  color: ${({ isSent }) => (isSent ? 'white' : '#333')};
  padding: 10px 15px;
  border-radius: 10px;
  max-width: 60%;
  align-self: ${({ isSent }) => (isSent ? 'flex-end' : 'flex-start')};
  position: relative;
  margin: 5px 0;
`;

export const MessageUsername = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const ChatInputContainer = styled.div`
  display: flex;
  padding: 15px 20px;
  background-color: #f3f7fb;
  border-top: 1px solid #e6e6e6;
`;

export const ChatInput = styled.input`
  flex: 1;
  padding: 10px 15px;
  border-radius: 25px;
  border: none;
  background-color: #ffffff;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
`;

export const SendButton = styled.button`
  margin-left: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;