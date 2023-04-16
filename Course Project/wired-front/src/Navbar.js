import { useState } from "react";

function Navbar() {
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

  function deleteCategory(categories) {
    setCategories(
      categories.filter((category) => category.id !== categories.length - 1)
    );
  }

  return (
    <div>
      <i className="fa-solid fa-bars"></i>

      <div className="logo">
        <a href="index.html">
          <img src="./assets/images/Wired.png" alt="" />
        </a>
      </div>

      <div className="nav">
        <ul id="categories-list">
          {categories.map((category, index) => {
            return (
              <li key={index}>
                <a>{category.title.toUpperCase()}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <button onClick={() => deleteCategory(categories)}>
        Delete Category
      </button>
    </div>
  );
}

export default Navbar;
