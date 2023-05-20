import { useState, useEffect, useContext } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { ThemeContext } from "../context/ThemeContext";
function Navbar({ isSideMenuOpen, setIsSideMenuOpen }) {
  const { data: categories } = useFetch("http://localhost:3000/categories");
  const { primaryColor } = useContext(ThemeContext);

  function toggleSideMenu() {
    setIsSideMenuOpen((prevState) => !prevState);
  }

  return (
    <div
      className={primaryColor == "white" ? "bg-white navbar" : "bg-dark navbar"}
    >
      <div className="row">
        <div className="logo">
          <button
            className={`${
              primaryColor == "white" ? "" : "bg-dark text-white"
            } side-menu-btn`}
            onClick={toggleSideMenu}
          >
            <i
              className={
                "fa-solid " + (isSideMenuOpen ? "fa-close" : "fa-bars")
              }
            ></i>
          </button>
          <NavLink exact to={"/"}>
            <img
              className={`${primaryColor == "white" ? "" : "bg-white px-1"} `}
              src="/assets/images/Wired.png"
              alt=""
            />
          </NavLink>
        </div>

        <div className="nav-categories">
          <ul>
            {categories &&
              categories.map((category) => {
                return (
                  <li key={category.id}>
                    <NavLink
                      className={`${
                        primaryColor == "white"
                          ? "text-dark"
                          : "bg-dark text-white"
                      } nav-link`}
                      to={`/category/${category.title}`}
                    >
                      {category.title.toUpperCase()}
                    </NavLink>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <div className="sign-div">
        <Link
          to={"/login"}
          className={`${
            primaryColor == "white" ? "text-dark" : "bg-dark text-white"
          } sing-in-btn`}
        >
          SIGN IN
        </Link>
        <div className="btn-div">
          <Link to={"/home#subscribe"} className="bg-blue btn">
            SUBSCRIBE
          </Link>
          <Link
            to={"/search"}
            className={`${
              primaryColor == "white" ? "text-dark" : "bg-dark text-white"
            } sing-in-btn`}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
