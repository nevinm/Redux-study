import { useState, createContext } from "react";
import "./App.css";
import { Accordion } from "./components/Accordion";
import { Tree } from "./components/Tree";
import { Form } from "./components/Form";
import { ModalParent } from "./components/ModalParent";
import { ProtectedComponent } from "./components/ProtectedComponent";
import { treeData, accordionData, searchItems } from "./assets/data.js";
import { PaginationContainer } from "./components/PaginationContainer";
import { StarRating } from "./components/StarRating.jsx";
import { ToolTipHeading } from "./components/Tooltip";
import { SearchBar } from "./components/SearchBar";

// Create the Authentication Context
const AuthenticationContext = createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

function App() {
  // Manage authentication state here
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <>
      <h1> App </h1>
      {/* <button onClick={isAuthenticated ? logout : login}>
        {isAuthenticated ? "Logout" : "Login"}
      </button>

      <AuthenticationContext.Provider value={{ isAuthenticated, login, logout }}>
        {isAuthenticated && <ProtectedComponent />}
      </AuthenticationContext.Provider>
      <br />
      <br />
      <br />
      <br />
      <ModalParent /> */}
      {/* <PaginationContainer /> */}
      {/* <Tree data={treeData} /> */}
      {/* <ToolTipHeading /> */}
      <br />
      <br />
      <hr />
      {/* <Accordion data={accordionData} /> */}
      {/* <StarRating /> */}
      <SearchBar items={searchItems} />
    </>
  );
}

export { AuthenticationContext };
export default App;
