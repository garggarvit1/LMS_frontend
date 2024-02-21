import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvide = ({children}) => {
    const [userData, setUserData] = useState({ username: ''});
    console.log("main"+userData.username);
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
    {children}
  </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext);
