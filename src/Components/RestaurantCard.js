import React from "react";

const RestaurantCard = () => {
  const restaurants = [
    {
      rank: 1,
      name: "Restaurant Name 1",
      location: "City, Country",
      description: "A great place to dine with amazing food.",
      reviews: 152,
      tags: ["Italian", "Fine Dining", "Romantic"],
      link: "https://example.com/restaurant1",
    },
    {
      rank: 2,
      name: "Restaurant Name 2",
      location: "City, Country",
      description: "Enjoy gourmet meals in a cozy setting.",
      reviews: 98,
      tags: ["French", "Brunch", "Casual"],
      link: "https://example.com/restaurant2",
    },
    {
      rank: 3,
      name: "Restaurant Name 3",
      location: "City, Country",
      description: "The best seafood in town.",
      reviews: 234,
      tags: ["Seafood", "Casual", "Local"],
      link: "https://example.com/restaurant3",
    },
    {
      rank: 4,
      name: "Restaurant Name 4",
      location: "City, Country",
      description: "A family-friendly restaurant with great ambiance.",
      reviews: 180,
      tags: ["American", "Family", "Casual"],
      link: "https://example.com/restaurant4",
    },
    {
      rank: 5,
      name: "Restaurant Name 5",
      location: "City, Country",
      description: "Award-winning cuisine with a modern twist.",
      reviews: 250,
      tags: ["Modern", "Award-winning", "Fine Dining"],
      link: "https://example.com/restaurant5",
    },
    {
      rank: 6,
      name: "Restaurant Name 6",
      location: "City, Country",
      description: "Authentic local dishes served with passion.",
      reviews: 120,
      tags: ["Local", "Authentic", "Casual"],
      link: "https://example.com/restaurant6",
    },
    {
      rank: 7,
      name: "Restaurant Name 7",
      location: "City, Country",
      description: "A perfect spot for brunch with friends.",
      reviews: 75,
      tags: ["Brunch", "Friends", "Casual"],
      link: "https://example.com/restaurant7",
    },
    {
      rank: 8,
      name: "Restaurant Name 8",
      location: "City, Country",
      description: "An upscale dining experience with exceptional service.",
      reviews: 320,
      tags: ["Upscale", "Fine Dining", "Luxury"],
      link: "https://example.com/restaurant8",
    },
    {
      rank: 9,
      name: "Restaurant Name 9",
      location: "City, Country",
      description: "Great fusion cuisine with a cozy atmosphere.",
      reviews: 150,
      tags: ["Fusion", "Cozy", "Casual"],
      link: "https://example.com/restaurant9",
    },
    {
      rank: 10,
      name: "Restaurant Name 10",
      location: "City, Country",
      description: "Perfect for special occasions and fine dining.",
      reviews: 180,
      tags: ["Special Occasions", "Fine Dining", "Romantic"],
      link: "https://example.com/restaurant10",
    },
  ];
  return (
    <div className="max-w-4xl mx-auto mt-8">
      {/* Top 10 Restaurants List */}
      <div className="space-y-6">
        {restaurants.map((restaurant) => (
          <a
            href={restaurant.link}
            key={restaurant.rank}
            className="block group p-8 bg-white rounded-lg shadow-lg border border-light-gray hover:border-blue-500 transform transition duration-300 hover:scale-105 hover:bg-gray-100"
          >
            <div className="flex items-start space-x-4">
              {/* Restaurant Info */}
              <div className="flex-1">
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
              {/* Tags (Cuisine and General Info) */}
              <div className="flex flex-wrap gap-2 mt-4">
                {restaurant.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs text-white bg-blue-500 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RestaurantCard;
