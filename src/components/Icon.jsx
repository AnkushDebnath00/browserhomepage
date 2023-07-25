import React from "react";

const Icon = ({ icon, link }) => (
  <a
    href={link}
    className="w-16 h-16 bg-white bg-opacity-10 flex items-center justify-center rounded-lg hover:bg-opacity-20 m-2"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={icon} alt="Input Tools" className="h-10 w-10 object-contain" />
  </a>
);

export default Icon;
