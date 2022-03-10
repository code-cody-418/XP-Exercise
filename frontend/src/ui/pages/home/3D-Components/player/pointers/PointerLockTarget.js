import React from "react";
import "./canvas-pointerLock.css";
import { BiTargetLock } from "react-icons/bi";
import { IconContext } from "react-icons/lib";

export const PointerLockTarget = ({active}) => {
  return (
    <>
      <IconContext.Provider
        value={{ color: active ? "magenta" : "black", className: "target" }}
      >
        <BiTargetLock />
      </IconContext.Provider>
    </>
  );
};
