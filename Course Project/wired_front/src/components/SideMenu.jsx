import { useState } from "react";
import "./SideMenu.css";
import { Link } from "react-router-dom";
export default function SideMenu({ setIsSideMenuOpen }) {
  const [categories, setCategories] = useState([
    {
      id: 1,
      title: "business",
    },
    {
      id: 2,
      title: "culture",
    },
    {
      id: 3,
      title: "tech",
    },
    {
      id: 4,
      title: "science",
    },
  ]);
  const [subCategories, setSubCategories] = useState([
    {
      id: 1,
      title: "crypto",
    },
    {
      id: 2,
      title: "books",
    },
    {
      id: 3,
      title: "phyichs",
    },
    {
      id: 4,
      title: "math",
    },
    {
      id: 5,
      title: "javascript",
    },
    {
      id: 6,
      title: "cooking",
    },
  ]);
  return (
    <div className="sideMenu">
      <ul id="side-menu-categories">
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              to={`/category/${category.title}`}
              onClick={() => setIsSideMenuOpen(false)}
            >
              {category.title.charAt(0).toUpperCase() + category.title.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
      <hr />
      <div className="side-links">
        <a href="search.html">Search</a>
        <a href="login.html">Sign in</a>
        <ul id="subcategories">
          {subCategories.map((subCategory) => (
            <li key={subCategory.id}>
              {subCategory.title.charAt(0).toUpperCase() +
                subCategory.title.slice(1)}
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <div className="social-icons">
        <i className="fa-brands fa-facebook fa-2x"></i>
        <i className="fa-brands fa-facebook fa-2x"></i>
        <i className="fa-brands fa-facebook fa-2x"></i>
        <i className="fa-brands fa-facebook fa-2x"></i>
      </div>
    </div>
  );
}
