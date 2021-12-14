import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import Links from "./Links";
import Socials from "./Socials";
import { useGlobalContext } from "./context";
const Sidebar = () => {
  const { isSideBarShow, setSideBar } = useGlobalContext();
  return (
    <aside className={isSideBarShow ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <img src={logo} className="logo" alt="" />
        <button
          className="close-btn"
          onClick={() => {
            setSideBar(false);
          }}
        >
          <FaTimes />
        </button>
      </div>
      <Links links={links} />
      <Socials social={social} />
    </aside>
  );
};

export default Sidebar;
