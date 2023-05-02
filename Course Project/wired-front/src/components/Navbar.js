import { useState } from "react";
import "./Navbar.css";
function Navbar({
  isSideMenuOpen,
  setIsSideMenuOpen,
  setCurrentPage,
  setCategoryName,
}) {
  const [categories, setCategories] = useState([
    {
      id: 1,
      title: "Business",
    },
    {
      id: 2,
      title: "Tech",
    },
    {
      id: 3,
      title: "Science",
    },
  ]);

  function toggleSideMenu() {
    setIsSideMenuOpen((prevState) => !prevState);
  }
  function switchPage(page, categoryName) {
    setCurrentPage(page);
    setCategoryName(categoryName);
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
          <button href="index.html" onClick={() => switchPage("home", "")}>
            <img src="/assets/images/Wired.png" alt="" />
          </button>
        </div>

        <div className="nav-categories">
          <ul>
            {categories.map((category) => {
              return (
                <li key={category.id}>
                  <button
                    onClick={() => switchPage("category", category.title)}
                  >
                    {category.title.toUpperCase()}
                  </button>
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
          <a href="search.html">
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
