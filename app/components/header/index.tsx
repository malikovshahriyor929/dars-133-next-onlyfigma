import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header >
      <div className="flex items-center justify-between border-b">

      <div className="h-10 *:cursor-pointer  flex items-center px-4 text-sm font-medium gap-6">
        <span>Music</span>
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Account</span>
      </div>
      <Link href={"/"}>
        <Button variant="link">log out</Button>
      </Link>
      </div>
    </header>
  );
};

export default Header;
