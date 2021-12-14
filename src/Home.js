import React, { useContext } from "react";
import { FaBars, FaUniregistry } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
  const { setSideBar, setModal } = useGlobalContext();
  return (
    <main>
      <button
        className="sidebar-toggle"
        onClick={() => {
          setSideBar(true);
        }}
      >
        <FaBars />
      </button>
      <button
        className="btn"
        onClick={() => {
          setModal(true);
        }}
      >
        show Modal
      </button>
    </main>
  );
};

export default Home;
