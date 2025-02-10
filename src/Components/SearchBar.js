import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
    if (onSearch) {
      onSearch(event.target.value); // Call the parent function when typing
    }
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-full px-5 py-3 max-w-4xl mx-auto bg-white focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200">
      <svg
        className="w-6 h-6 text-gray-400 mr-3"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-4.35-4.35M17 10.5A6.5 6.5 0 1 1 4 10.5a6.5 6.5 0 0 1 13 0z"
        />
      </svg>
      <input
        type="text"
        className="w-full outline-none text-lg text-gray-700 placeholder-gray-400"
        placeholder="Search 100 restaurants"
      />
    </div>
  );
};

export default SearchBar;
