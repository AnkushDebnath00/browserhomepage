import React from "react";

const Tile = ({ icon, link }) => (
  <a
    href={link}
    className="w-24 h-24 bg-white bg-opacity-10 flex items-center justify-center rounded-lg hover:bg-opacity-20 m-3"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={icon} alt="Input Tools" className="h-12 w-12 object-contain" />
  </a>
);

export default Tile;
