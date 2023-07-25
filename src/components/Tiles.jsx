import React from "react";
import { tilesData, iconsData1, iconsData2 } from "../data/data";
import Tile from "./Tile";
import Icon from "./Icon";

const Tiles = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center mt-32">
        {tilesData.map((items) => {
          return (
            <div
              className="flex flex-col items-center justify-start"
              key={items.name}
            >
              <h3 className="font-[mina] text-lg text-center m-0 mx-auto tracking-[10px] opacity-40">
                {items.name.toUpperCase()}
              </h3>
              <div className="flex flex-wrap flex-row justify-between items-center mx-8 max-w-[380px]">
                {items.data.map((item) => (
                  <Tile
                    key={item.url.length * item.logo.length}
                    icon={item.logo}
                    link={item.url}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row items-start justify-center">
        {iconsData1.map((items) => {
          return <Icon icon={items.logo} link={items.url} />;
        })}
      </div>
      <div className="flex flex-row items-start justify-center">
        {iconsData2.map((items) => {
          return <Icon icon={items.logo} link={items.url} />;
        })}
      </div>
    </>
  );
};

export default Tiles;
