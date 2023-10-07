import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { deleteItem } from "../utils/cartSlice";

const CartItem = ({ items }) => {
  const dispatch = useDispatch();
  const handleDeleteItem = (item) => {
    dispatch(deleteItem(item));
  };
  // console.log(items);
  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="mx-12 p-1 bg-red-700 text-white shadow-lg rounded-lg hover:bg-white hover:text-red-800 font-semibold border border-red-500 "
                onClick={() => handleDeleteItem(item)}
              >
                Delete -
              </button>
            </div>
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              alt=""
              className=" h-fit"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
