import React from "react";

const Top10List = () => {
  const restaurants = [
    {
      rank: 1,
      name: "Restaurant Name 1",
      location: "City, Country",
      description: "A great place to dine with amazing food.",
      reviews: 152,
      tags: ["Italian", "Fine Dining", "Romantic"],
      link: "https://example.com/restaurant1",
      image:
        "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2",
    },
    {
      rank: 2,
      name: "Restaurant Name 2",
      location: "City, Country",
      description: "Enjoy gourmet meals in a cozy setting.",
      reviews: 98,
      tags: ["French", "Brunch", "Casual"],
      link: "https://example.com/restaurant2",
      image:
        "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-8">
      {/* Top 10 Restaurants List */}
      <div className="space-y-6">
        {restaurants.map((restaurant) => (
          <div key={restaurant.rank} className="flex items-center space-x-4">
            {/* Rank Number Outside */}
            <div className="text-4xl font-semibold text-blue-800 w-12 text-right pr-8">
              {restaurant.rank}
            </div>

            {/* Restaurant Card */}
            <a
              href={restaurant.link}
              className="flex flex-row bg-white rounded-xl shadow-lg border border-light-gray hover:border-blue-500 transform transition duration-300 hover:scale-105 hover:bg-gray-100 overflow-hidden w-full"
            >
              {/* Image (Touches Left Edge) */}
              <div className="w-48 h-40 overflow-hidden rounded-l-xl">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Restaurant Info */}
              <div className="p-6 flex-1">
                <h3 className="text-xl font-semibold text-left">
                  {restaurant.name}
                </h3>
                <p className="text-left text-gray-500">
                  &#x1F4CD; {restaurant.location}
                </p>
                <p className="text-left text-sm text-gray-600 mt-2">
                  {restaurant.description}
                </p>
                <p className="text-left text-sm text-gray-500 mt-1">
                  {restaurant.reviews} Reviews
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Top10List;
