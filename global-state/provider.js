import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppWrapper = ({ children }) => {
  const [loggedIn, setUserLoggedIn] = useState(false)
  const [token, setToken] = useState(undefined)

  const signInObject = {
    loggedIn: loggedIn,
    setUserLoggedIn: setUserLoggedIn,
    setToken: setToken,
  }

  return (
    <AppContext.Provider value={signInObject}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}