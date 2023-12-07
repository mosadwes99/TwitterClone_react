import React from "react";
import LeftSide from "./LeftSide";
import MiddleSide from "./MiddleSide";
import RightSide from "./RightSide";

export default function TwitterClone() {
  let changeTheme = () => {
    document.documentElement.classList.toggle("dark");
  };
  let changeDir = (e) => {
    document.documentElement.setAttribute("dir" ,e );
  };

  return (
    <>
      <body  className=" dark:bg-dim-900   ">
        <div className=" container flex h-screen">
          <LeftSide theme={changeTheme} dir={changeDir} />

          <MiddleSide />

          <RightSide />
        </div>
      </body>
    </>
  );
}
