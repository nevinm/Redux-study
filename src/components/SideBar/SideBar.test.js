// src/components/Sidebar.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Sidebar from "./Sidebar";

const mockFriends = ["Zoe", "Joe", "Emily"];
const mockOnSelectFriend = jest.fn();

describe("Sidebar Component", () => {
  it("renders a list of friends", () => {
    render(
      <Sidebar
        friends={mockFriends}
        selectedFriend="Zoe"
        onSelectFriend={mockOnSelectFriend}
      />
    );

    mockFriends.forEach((friend) => {
      expect(screen.getByText(friend)).toBeInTheDocument();
    });
  });

  it("calls onSelectFriend when a friend is clicked", () => {
    render(
      <Sidebar
        friends={mockFriends}
        selectedFriend="Zoe"
        onSelectFriend={mockOnSelectFriend}
      />
    );

    const friendToClick = screen.getByText("Joe");
    fireEvent.click(friendToClick);

    expect(mockOnSelectFriend).toHaveBeenCalledWith("Joe");
  });

  it("renders the correct number of friends", () => {
    render(
      <Sidebar
        friends={mockFriends}
        selectedFriend="Zoe"
        onSelectFriend={mockOnSelectFriend}
      />
    );

    const friendsListItems = screen.getAllByRole("button");
    expect(friendsListItems).toHaveLength(mockFriends.length);
  });

  it("displays the friend name correctly", () => {
    render(
      <Sidebar
        friends={mockFriends}
        selectedFriend="Zoe"
        onSelectFriend={mockOnSelectFriend}
      />
    );

    const friendToCheck = screen.getByText("Joe");
    expect(friendToCheck).toHaveTextContent("Joe");
  });
});
