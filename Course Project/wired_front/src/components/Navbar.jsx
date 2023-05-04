import { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
function Navbar({ isSideMenuOpen, setIsSideMenuOpen }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  function toggleSideMenu() {
    setIsSideMenuOpen((prevState) => !prevState);
  }

  return (
    <div className="navbar">
      <div className="row">
        <div className="logo">
          <button className="side-menu-btn" onClick={toggleSideMenu}>
            <i
              className={
                "fa-solid " + (isSideMenuOpen ? "fa-close" : "fa-bars")
              }
            ></i>
          </button>
          <NavLink exact to={"/"}>
            <img src="/assets/images/Wired.png" alt="" />
          </NavLink>
        </div>

        <div className="nav-categories">
          <ul>
            {categories.map((category) => {
              return (
                <li key={category.id}>
                  <NavLink to={`/category/${category.title}`}>
                    {category.title.toUpperCase()}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="sign-div">
        <a className="sing-in-btn">SIGN IN</a>
        <div className="btn-div">
          <a href="#" className="bg-blue btn">
            SUBSCRIBE
          </a>
          <Link to={"/search"}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
