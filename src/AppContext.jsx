import React, { createContext, useState } from 'react';

export const AppContext = createContext();
const AppProvider = (props) => {
  const [lightMode, setLightMode] = useState(false);
  return (
    <AppContext.Provider value={[lightMode, setLightMode]}>
      {props.children}
    </AppContext.Provider>
  );
};
export default AppProvider
