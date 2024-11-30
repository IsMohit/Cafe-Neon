import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../App.css";
import { data } from "../components/data";

import Menulist from "../components/Menulist";
import Footer from "../components/footer";
import Newnav from "../components/newnav";

const Menu = () => {
  const [meals] = useState(data);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const mealType = location.pathname.split("/")[1]; // Extract the type from the URL
  // Filter meals based on the route
  const filteredMeals = mealType
    ? meals.filter((meal) => meal.type === mealType)
    : meals; // Show all meals for the root path

  return (
    <>
      <div className="main">
        <section>
          <Newnav />
        </section>

        <div className="pt-32 min-h-screen bg-[#f3f2ee]">
          <Menulist meals={filteredMeals} /> {/* Pass filtered meals */}
        </div>

        <div>
          <Footer />{" "}
        </div>
      </div>
    </>
  );
};

export default Menu;
