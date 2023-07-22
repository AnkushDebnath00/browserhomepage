import React from "react";

const Header = () => {
  let date = new Date();
  date = date.toDateString();
  //   let time =
  // date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  return (
    <>
      <div>{date}</div>
      {/* <div>{time}</div> */}
      <div>Header</div>
    </>
  );
};

export default Header;
