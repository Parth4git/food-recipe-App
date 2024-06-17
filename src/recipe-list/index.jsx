import React from "react";
import { Link } from "react-router-dom";

const RecipeItem = ({ item }) => {
  return (
    <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-3xl border-white">
      <div className="h-40 justify-center overflow-hidden items-center rounded-xl">
        <img
          src={item?.image_url}
          alt="recipe image"
          className="block w-full"
        />
      </div>
      <div>
        <span className="text-sm font-bold text-blue-500">
          {item?.publisher}
        </span>
        <h3 className="text-2xl font-bold truncate text-black">
          {item?.title}
        </h3>
        <Link
          to={`/item-details/${item?.id}`}
          className="text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md  bg-black text-white"
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
};

export default RecipeItem;
