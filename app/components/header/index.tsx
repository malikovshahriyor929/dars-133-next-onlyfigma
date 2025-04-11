import React from "react";

const Header = () => {
  return (
    <header className="h-10 *:cursor-pointer border-b flex items-center px-4 text-sm font-medium gap-6">
      <span>Music</span>
      <span>File</span>
      <span>Edit</span>
      <span>View</span>
      <span>Account</span>
    </header>
  );
};

export default Header;
