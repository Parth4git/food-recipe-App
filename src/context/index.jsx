import React, { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParams, setSearchParams] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [addFavorites, setAddFavorites] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true); // Set loading to true when starting to fetch data
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParams}`
      );
      const data = await res.json();
      if (data?.data?.recipes) {
        setRecipeList(data.data.recipes);
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
      setSearchParams(""); // Clear searchParams after fetching
    }
  }

  function handleFavorite(getCurrentItem) {
    let updatedFavorites = [...addFavorites];

    if (updatedFavorites.some((item) => item.id === getCurrentItem.id)) {
      updatedFavorites = updatedFavorites.filter(
        (item) => item.id !== getCurrentItem.id
      );
    } else {
      updatedFavorites.push(getCurrentItem);
    }

    setAddFavorites(updatedFavorites);
    console.log(addFavorites, "favorites");
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParams,
        loading,
        recipeList,
        setSearchParams,
        handleSubmit,
        recipeDetails,
        setRecipeDetails,
        addFavorites,
        handleFavorite,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
