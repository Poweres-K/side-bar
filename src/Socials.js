import React from "react";

const Socials = ({ social }) => {
  return (
    <ul className="social-icons">
      {social.map((soc) => {
        const { id, url, icon } = soc;
        return (
          <li key={id}>
            <a href={url}>{icon}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
