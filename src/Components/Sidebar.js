import React from "react";

const Sidebar = () => {
  const months = [
    "January '25",
    "February '25",
    "March '25",
    "April '25",
    "May '25",
    "June '25",
    "July '25",
    "August '25",
    "September '25",
    "October '25",
    "November '25",
    "December '25",
  ];

  return (
    <div className="w-56 h-screen fixed left-0 top-0 bg-white p-5 pt-32">
      <nav className="space-y-0.5">
        {" "}
        {/* Reduces vertical spacing */}
        {months.map((month, index) => (
          <a
            key={index}
            href={`#${month.toLowerCase()}`}
            className="block px-1 py-0.5 text-xs text-gray-700 hover:text-gray-500 transition text-left"
          >
            {month}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
