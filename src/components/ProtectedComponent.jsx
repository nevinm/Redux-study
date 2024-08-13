import React, { useContext } from "react";
import { AuthenticationContext } from "../App";

export const ProtectedComponent = () => {
  const { isAuthenticated, logout } = useContext(AuthenticationContext);

  return (
    <div>
      {isAuthenticated ? (
        <>
          <h2>Protected Content: You are logged in!</h2>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <h2>You must be logged in to see this content.</h2>
      )}
    </div>
  );
};
