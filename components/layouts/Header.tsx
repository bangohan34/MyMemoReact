import React from "react";

const Header = () => {
  return (
    <div className="divide-y border-gray-200 dark:border-800 border-b">
      <div className="px-4 py-3 md:py-6 1g:px-6">
        <div className="flex items-center space-y-2 md:space-y-0 md:space-x-6">
          <a href="localhost:3000">Home</a>
          <a href="/">Life</a>
          <a href="/">Money</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
