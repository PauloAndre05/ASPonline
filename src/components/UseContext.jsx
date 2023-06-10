import { createContext, useState } from 'react';
import PropTypes from 'prop-types'

export const UserContext = createContext();


export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};  

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};