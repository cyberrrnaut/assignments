import { useEffect, useState } from "react";
import Avatar from "./Avatar";
import { BlackButton } from "./BlackButton";
import { useNavigate } from "react-router-dom";

export const Appbar = ({name}) => {
  const navigate = useNavigate();

 
  const handleLogout = () => {
    localStorage.clear();
    navigate("/signin");
  };

  return (
    <div className="flex justify-between">
      <span className="pl-2">PayTm</span>
      <div className="grid grid-cols-3">
        <span className="pt-8">Hello</span>
        <div className="pr-3 pt-2">
          <Avatar name={name} />
        </div>
        <div className="pt-6 pr-2"> 
          <BlackButton onClick={handleLogout} label={"Logout"} />
        </div>
      </div>
    </div>
  );
};
