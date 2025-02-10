import React from "react";
import Header from "../Components/RestaurantsHeader.js";
import { useState } from "react";
import SearchBar from "../Components/SearchBar";
import TopList from "../Components/TopList.js";
import RestaurantCard from "../Components/RestaurantCard.js";

const Restaurants = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Header />
      <div className="p-10">
        <SearchBar onSearch={setSearchQuery} />
        {searchQuery && (
          <p className="mt-4 text-gray-600">Searching for: {searchQuery}</p>
        )}
      </div>
      <RestaurantCard />
    </div>
  );
};

export default Restaurants;
