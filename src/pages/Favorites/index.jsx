// components/Favorites.jsx
import React, { useContext } from "react";
import { GlobalContext } from "../../context/index.jsx";
import { Link } from "react-router-dom";

const Favorites = () => {
  const { addFavorites, handleFavorite } = useContext(GlobalContext);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold text-center mb-4">
        My Favorite Recipes
      </h1>
      {addFavorites.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-10">
          {addFavorites.map((recipe) => (
            <div
              key={recipe.id}
              className="max-w-xs w-full lg:w-1/4 flex flex-col items-center"
            >
              <img
                src={recipe.image_url}
                alt={recipe.title}
                className="object-cover block w-full h-full group-hover:scale-105 duration-300"
              />
              <div className="text-center mt-2">
                <span className="text-xl font-bold text-blue-500">
                  {recipe.publisher}
                </span>
                <h3 className="text-sm font-bold truncate text-black">
                  {recipe.title}
                </h3>
                <button
                  onClick={() => handleFavorite(recipe)}
                  className="text-sm p-3 mt-2 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white"
                >
                  Remove from Favorites
                </button>
                <Link
                  to={`/recipe/${recipe.id}`}
                  className="text-sm p-3 mt-2 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-blue-500 text-white"
                >
                  View Recipe
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No favorite recipes added yet.
        </p>
      )}
    </div>
  );
};

export default Favorites;
