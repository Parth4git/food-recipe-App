import React from "react";
import { GlobalContext } from "../../context/index.jsx";
import RecipeItem from "../../recipe-list/index.jsx";
import { useContext } from "react";

const index = () => {
  const { loading, recipeList } = useContext(GlobalContext);

  if (loading) {
    return <h1>Loading .... Please Wait</h1>;
  }

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10 ">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem item={item} key={item.id} />)
      ) : (
        <div className="lg:text-4xl text-xl font-bold text-gray-800 text-center">
          Search Any Recipe
        </div>
      )}
    </div>
  );
};

export default index;
