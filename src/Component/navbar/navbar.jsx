import React from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/index.jsx";

const Navbar = () => {
  const { searchParams, setSearchParams, handleSubmit } =
    React.useContext(GlobalContext);

  return (
    <div className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-3xl font-bold text-red-500">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-black font-bold "
              : "text-black hover:text-gray-800 duration-300"
          }
        >
          Food Recipe
        </NavLink>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParams}
          onChange={(e) => setSearchParams(e.target.value)}
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200 text-black"
          placeholder="Search Recipe"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-black font-bold"
                : "text-black hover:text-gray-800 duration-300"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive
                ? "text-black font-bold "
                : "text-black hover:text-gray-800 duration-300"
            }
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
