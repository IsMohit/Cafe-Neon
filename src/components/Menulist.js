import React from "react";

const Menulist = ({ meals }) => {
  if (!meals || meals.length === 0) return <p>No meals available!</p>;

  return (
    <div
      className="container mx-auto px-4 py-10"
      style={{ marginTop: "120px" }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {meals.map((meal) => (
          <div
            key={meal.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={meal.img}
              alt={meal.title}
              className="w-full h-48 object-cover sm:h-60 lg:h-72"
            />
            <div className="p-5">
              <div className="flex justify-between items-center mb-3">
                <h5 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {meal.title}
                </h5>
                <small className="text-sm sm:text-lg font-semibold text-gray-600">
                  ${meal.price}
                </small>
              </div>
              <div className="border-t border-gray-200 mt-2 pt-3">
                <p className="text-sm text-gray-700">{meal.para}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menulist;
