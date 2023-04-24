import { useState } from "react";
import "./Navbar.css";
function Navbar({ setIsSideMenuOpen }) {
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

  return (
    <div className="navbar">
      <div className="row">
        <div className="logo">
          <button onClick={toggleSideMenu}>
            <i className="fa-solid fa-bars"></i>
          </button>
          <a href="index.html">
            <img src="./assets/images/Wired.png" alt="" />
          </a>
        </div>

        <div className="nav-categories">
          <ul>
            {categories.map((category) => {
              return (
                <li key={category.id}>
                  <a>{category.title.toUpperCase()}</a>
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
