// src/components/ChatWindow.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import ChatWindow from "./ChatWindow.jsx";

const mockMessages = [
  { username: "Zoe", message: "Hi Zoe!", date: "2024-08-15 10:00" },
  { username: "User", message: "Hello!", date: "2024-08-15 10:05" },
];

const mockOnSendMessage = jest.fn();

describe("ChatWindow Component", () => {
  it("renders messages", () => {
    render(
      <ChatWindow
        friend="Zoe"
        messages={mockMessages}
        onSendMessage={mockOnSendMessage}
      />
    );

    mockMessages.forEach(({ message }) => {
      expect(screen.getByText(message)).toBeInTheDocument();
    });
  });

  it("displays the correct username for each message", () => {
    render(
      <ChatWindow
        friend="Zoe"
        messages={mockMessages}
        onSendMessage={mockOnSendMessage}
      />
    );

    mockMessages.forEach(({ username, message }) => {
      const messageElement = screen.getByText(message);
      expect(messageElement.previousSibling).toHaveTextContent(username);
    });
  });
});
