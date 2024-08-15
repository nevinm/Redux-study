import styled from "styled-components";

export const SidebarContainer = styled.div`
  color: black;
  width: 300px;
  background-color: #ffffff;
  border-right: 1px solid #e6e6e6;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

export const SearchBox = styled.div`
  padding: 10px;
  background-color: #f3f7fb;
  border-bottom: 1px solid #e6e6e6;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: none;
  background-color: #e6e6e6;
`;

export const Friend = styled.button`
  color: black;
  text-decoration: none;
  font-weight: 400;
  padding: 15px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 0.3s;
  position: relative;
  background-color: ${({ isActive }) => (isActive ? "#e6f7ff" : "transparent")};

  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const FriendImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 15px;
`;

export const FriendInfo = styled.div`
  flex-grow: 1;
`;

export const Status = styled.div`
  margin-left: auto;
  margin-right: 10px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #00ff00; /* Example status color */
`;
