import { useState } from "react";

//CRUD operation with state
function Navbar() {
  const [categories, setCategories] = useState([
    //---------------------------------------------------------CREATE
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

  function deleteCategory(event) {
    let elementId = +event.target.id;
    console.log(event);
    console.log(elementId);
    //---------------------------------------------------------DELETE
    setCategories((prevState) =>
      prevState.filter((category) => category.id !== elementId)
    );
  }
  function addCategory() {
    // setCategories((prevState) => {
    //   let newCategories = prevState;       //shallow copy
    //   newCategories.push({
    //     id: 4,
    //     title: "IT",
    //   });
    //   console.log(newCategories);
    //   return newCategories;
    // });

    //setCategories([newCategory, ...categories]); //[newCategory, element1, element2, element3 ];

    //---------------------------------------------------------UPDATE

    setCategories((prevState) => {
      let newCategory = {
        id: prevState.length + 1,
        title: "IT",
      };
      let newCategories = [newCategory, ...prevState];
      console.log(newCategories);
      return newCategories;
    });
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
          {/* ---------------------------------------------------------READ */}

          {categories.map((category, index) => {
            return (
              <li key={index}>
                <a>{category.title.toUpperCase()}</a>
                <button id={category.id} onClick={(e) => deleteCategory(e)}>
                  Delete Category
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <button onClick={() => addCategory()}>Add Category</button>
    </div>
  );
}

export default Navbar;
