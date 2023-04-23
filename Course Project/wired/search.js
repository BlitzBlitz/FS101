// import { fetchData } from "./fetch";
let categories = [];
let posts = [];
let mostPopular = [];
let subcategories = [];
let searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", searchPosts);
let menuIconElement = document.getElementById("menu-icon");
menuIconElement.addEventListener("click", toggleSideMenu);
let sideMenuElement = document.getElementById("side-menu");
let pageElement = document.getElementById("page");

fetch("http://localhost:3000/categories")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    categories = data;
    displayCategories("categories-list");
  })
  .catch((error) => {
    console.log(error);
  });

// fetchData(
//   "http://localhost:3000/categories",
//   (data) => {
//     categories = data;
//     displayCategories("categories-list");
//   },
//   (error) => {
//     console.log(error);
//   }
// );

function displayCategories(containerId) {
  let categoriesListElement = document.getElementById(containerId);
  categoriesListElement.innerHTML = "";
  categories.forEach((category) => {
    let categoryElement = document.createElement("li");
    categoryElement.innerHTML = `
          <a href="/category.html?title=${
            category.title
          }">${category.title.toUpperCase()}</a>
          `;
    categoriesListElement.appendChild(categoryElement);
  });
}

fetch("http://localhost:3000/posts?_sort=timestamp&_order=asc&_limit=5")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    posts = data;
    displayPosts(posts, "most-recent", "search-post-card");
  })
  .catch((error) => {
    console.log(error);
  });

// fetchData(
//   "http://localhost:3000/posts?_sort=timestamp&_order=asc&_limit=5",
//   (data) => {
//     console.log(data);
//     posts = data;
//     displayPosts(posts, "most-recent", "search-post-card");
//   },
//   (error) => {
//     console.log(error);
//   }
// );

fetch("http://localhost:3000/posts?_limit=10")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    posts = data;
    displayPosts(posts, "search-posts", "search-post-card");
  })
  .catch((error) => {
    console.log(error);
  });

function displayPosts(posts, containerId, subContainerClass) {
  let postsContainerElement = document.getElementById(containerId);
  postsContainerElement.innerHTML = "";
  posts.forEach((post) => {
    let postContainer = document.createElement("div");
    postContainer.classList.add(subContainerClass);
    postContainer.id = `${containerId}-${post.id}`;
    postContainer.innerHTML = `
          <img src="./${post.imgUrl}" alt="" />
          <div>
            <span>${post.subcategory}</span>
            <h1>${post.title}</h1>
            <p class="author-name">${
              post.author.name + " " + post.author.sirname
            }</p>
          </div>`;
    postsContainerElement.append(postContainer);
  });
}

function searchPosts(e) {
  e.preventDefault();
  let searchInputElement = document.getElementById("search-input");
  let keyword = searchInputElement.value;
  fetch(`http://localhost:3000/posts?author.name=${keyword}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      posts = data;
      displayPosts(posts, "search-posts", "search-post-card");
    })
    .catch((error) => console.log(error));
}

function toggleSideMenu() {
  fetch("http://localhost:3000/subcategories")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      displaySideMenu();
      subcategories = data;
      displayCategories("side-menu-categories");
      displaySubCategories("subcategories");
    })
    .catch((error) => {
      console.log(error);
    });
}

function displaySubCategories(containerId) {
  let subcategoriesElement = document.getElementById(containerId);
  subcategoriesElement.innerHTML = "";
  subcategories.forEach((subcategory) => {
    let subcategoryElement = document.createElement("a");
    subcategoryElement.href = `subcategory.html?title=${subcategory.title}`;
    subcategoryElement.innerText = subcategory.title; //make first letter capital
    subcategoriesElement.append(subcategoryElement);
  });
}

function displaySideMenu() {
  sideMenuElement.classList.toggle("d-none");
  pageElement.classList.toggle("d-none");

  let icon = menuIconElement.firstChild;
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");

  let categoryListEleement = document.getElementById("categories-list");
  categoryListEleement.classList.toggle("d-none");
}
