// components/RecipeDetails.jsx
import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/index.jsx";

const RecipeDetails = () => {
  const params = useParams();
  const { recipeDetails, setRecipeDetails, handleFavorite } =
    useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      try {
        const res = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${params.id}`
        );
        const data = await res.json();
        if (data?.data?.recipe) {
          setRecipeDetails(data.data.recipe);
        } else {
          console.error("Recipe not found");
        }
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    }

    getRecipeDetails();
  }, [params.id, setRecipeDetails]);

  const addToFavorites = () => {
    handleFavorite(recipeDetails); // Assuming recipeDetails contains necessary data for adding to favorites
  };

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      <div className="lg:text-4xl text-xl font-bold text-gray-800 text-center">
        <div className="flex flex-wrap justify-center gap-10">
          {recipeDetails ? (
            <>
              <img
                src={recipeDetails.image_url}
                alt="recipe"
                className="object-cover block w-full h-full group-hover:scale-105 duration-300"
              />
              <div className="text-center">
                <span className="text-xl font-bold text-blue-500 mt-4">
                  {recipeDetails.publisher}
                </span>
                <h3 className="text-sm font-bold truncate text-black">
                  {recipeDetails.title}
                </h3>
                <button
                  onClick={addToFavorites}
                  className="text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white"
                >
                  Add to Favorites
                </button>
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      {recipeDetails && (
        <div className="w-full text-center mt-8">
          <span className="text-xl font-bold text-blue-500 mt-4">
            Ingredients
          </span>
          <ul className="flex flex-col items-center mt-4 space-y-2">
            {recipeDetails.ingredients.map((item, index) => (
              <li className="text-sm font-bold text-black" key={index}>
                {item.quantity && `${item.quantity} `}
                {item.unit && `${item.unit} `}
                {item.description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
