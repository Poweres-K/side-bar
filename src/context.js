import React, { useState, useContext } from "react";

const Wrap = React.createContext();

const ContextWrap = function ({ children }) {
  const [isSideBarShow, setSideBar] = useState(false);
  const [isModalShow, setModal] = useState(false);
  return (
    <Wrap.Provider value={{ setSideBar, isSideBarShow, isModalShow, setModal }}>
      {children}
    </Wrap.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(Wrap);
};

export default ContextWrap;
