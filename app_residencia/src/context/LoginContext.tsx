import React, { createContext, useState } from "react";

export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
  const [loginPending, setLoginPending] = useState(false);
  
  return (
    <LoginContext.Provider value={{
      loginPending,
      setLoginPending
    }}>
      {children}
    </LoginContext.Provider>
  )
}

