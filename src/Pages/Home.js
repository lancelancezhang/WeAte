import React from "react";
import Header from "../Components/Header.js";
import SideBar from "../Components/Sidebar.js";
import TopList from "../Components/TopList.js";
import Footer from "../Components/Footer.js";

const Home = () => {
  return (
    <div>
      {/* Header - Always on top */}
      <div className="fixed top-0 left-0 w-full h-16 bg-white shadow-md z-50">
        <Header />
      </div>

      {/* Sidebar - Always on the left, starts below header */}
      <div className="fixed top-16 left-0 w-24 h-full">
        <SideBar />
      </div>

      {/* Main Content - Pushed down and to the right */}
      <div className="ml-58 mt-16 p-10">
        <TopList />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
