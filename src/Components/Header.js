import React from "react";

export default function Header() {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center">
          <a href="#" className="-m-1.5 p-1.5">
            {/* <span className="sr-only">Your Company</span> */}
            <img
              className="h-8 w-auto"
              src="https://simpleicons.org/icons/tui.svg"
              alt=""
            />
          </a>
          {/* Dinedex on the right of the logo */}
          <span className="ml-4 text-3xl font-semibold text-gray-900">
            <a href="/">We Ate</a>
          </span>
        </div>
        <div className="lg:flex lg:flex-1 lg:justify-end hidden">
          <a
            href="/restaurants"
            className="text-sm/6 font-semibold text-gray-900 hover:text-gray-500"
          >
            🔍 Search Restaurants
          </a>
        </div>
      </nav>
    </header>
  );
}
