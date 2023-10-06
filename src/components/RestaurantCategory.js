import React, { useState } from "react";
import ItemList from "./ItemList";

//building for according section in menu.
const RestaurantCategory = ({ data, showIndex, setShowIndex }) => {
  //controlled component - When component dont have its own state

  const handleClick = () => {
    setShowIndex();
    // setShowIndex == true ? (setShowIndex = false) : (setShowIndex = true);
  };
  return (
    <div>
      {/* Accordian Header */}
      <div className="w-6/12 m-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} - ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {/* Accordian Body  */}
        {showIndex && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
