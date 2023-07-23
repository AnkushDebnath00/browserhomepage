import React from "react";
import DATA from "../data/data";

const Tiles = () => {
  return (
    <>
      <div className="flex flex-row items-start justify-center  mt-32">
        {DATA.map((items) => {
          return (
            <div className="flex flex-col items-center justify-start">
              <h3 className="font-[mina] text-lg text-center m-0 mx-auto tracking-[10px] opacity-40">
                {items.name.toUpperCase()}
              </h3>
              <div className="flex flex-wrap flex-row justify-between items-center mx-8 max-w-[380px]">
                {items.data.map((item) => (
                  <Tile icon={item.logo} link={item.url} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row items-start justify-center">
        <img
          src="https://2.bp.blogspot.com/-1h850ZEqVl4/W2u2pqoYcAI/AAAAAAAAEok/wjR1MexVrr4hB8y_s5l08jYejVphdyebACLcBGAs/s1600/DuckDuckGo.png"
          alt=""
        />
      </div>
    </>
  );
};

export default Tiles;
