import React, { useState } from "react";
import ItemList from "./ItemList";

//building for according section in menu.
const RestaurantCategory = ({ data, showItems, setShowIndex, index }) => {
  //controlled component - When component dont have its own state

  const handleClick = () => {
    if (showItems === true) {
      setShowIndex(null);
    } else {
      setShowIndex(index);
    }
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
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
