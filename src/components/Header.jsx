import React from "react";
import { useState } from "react";

const Header = () => {
  let [query, setQuery] = "";
  let date = new Date();
  date = date.toDateString();
  //   let time =
  // date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  return (
    <div className="flex flex-row justify-between">
      <div className="font-semibold text-xl">{date}</div>
      {/* <div>{time}</div> */}
      <form action="	https://bing.com/search">
        <input
          type="text"
          id="query"
          disabled=""
          class=" rounded-lg border-transparent flex-1 appearance-none border w-full py-2 px-4 bg-black text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none"
          name="q"
          placeholder="query"
        />
      </form>
    </div>
  );
};

export default Header;
