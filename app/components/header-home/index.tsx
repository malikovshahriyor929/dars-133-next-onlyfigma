"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
    const rout = useRouter()
  return (
    <div className="shadow-lg ">
      <div className="w-[90%] mx-auto max-w-[1440px] py-2 flex items-center justify-between ">
        <p className="font-bold text-[#09090B] text-[20px] ">Inbox</p>
        <ul className="flex items-center gap-5 ">
          <li>home</li>
          <li>blog</li>
          <li>contact</li>
        </ul>
        <div className=" flex items-center gap-3">
          <Button onClick={()=>rout.push("/login")} variant="outline">Log in</Button>
          <Button onClick={()=>rout.push("/register")} > Register</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
