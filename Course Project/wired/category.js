let categoryName = window.location.href.split("?")[1].split("=")[1];

let titleElement = document.getElementById("title");
titleElement.innerText = categoryName;

let categoryTitleElement = document.getElementById("category-title");
categoryTitleElement.innerText =
  categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

let previousBtnElement = document.getElementById("previous-btn");
previousBtnElement.addEventListener("click", goBack);
previousBtnElement.disabled = true;
let nextBtnElement = document.getElementById("next-btn");
nextBtnElement.addEventListener("click", goForward);

let categories = [];
let postsOfTheCategory = [];
let postsOfTheSubCategory = [];
let posts = [];
let pageNumber = 1;
let itemsForPage = 2;
let postsNumber = 4;

fetch("http://localhost:3000/categories")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    categories = data;
    displayCategories();
  })
  .catch((error) => {
    console.log(error);
  });

function displayCategories() {
  let categoriesListElement = document.getElementById("categories-list");
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

fetch(`http://localhost:3000/posts?category=${categoryName}&_limit=3`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    postsOfTheCategory = data;
    displayPosts(
      postsOfTheCategory,
      "main-posts-container",
      "main-post-container"
    );
  })
  .catch((error) => {
    console.log(error);
  });

fetch(`http://localhost:3000/posts?_limit=5`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    postsOfTheSubCategory = data;
    displayPosts(
      postsOfTheSubCategory,
      "main-sub-category-container",
      "main-sub-post-container"
    );
  })
  .catch((error) => {
    console.log(error);
  });

fetch(`http://localhost:3000/posts?_limit=4`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    postsOfTheSubCategory = data;
    displayPosts(postsOfTheSubCategory, "sub-category-1", "sub-category-card");
  })
  .catch((error) => {
    console.log(error);
  });

fetch(
  `http://localhost:3000/posts?category=${categoryName}&_start=${
    (pageNumber - 1) * itemsForPage
  }&_limit=${itemsForPage}`
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    posts = data;
    displayPosts(posts, "latest-posts", "latest-post-card");
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
          <p>${post.desc}</p>
          <p class="author-name">${
            post.author.name + " " + post.author.sirname
          }</p>
        </div>`;
    postsContainerElement.append(postContainer);
  });
}

function goBack() {
  pageNumber--;
  if (pageNumber == 1) {
    previousBtnElement.disabled = true;
  }
  if (pageNumber != postsNumber / itemsForPage) {
    nextBtnElement.disabled = false;
  }
  fetch(
    `http://localhost:3000/posts?category=${categoryName}&_start=${
      (pageNumber - 1) * itemsForPage
    }&_limit=${itemsForPage}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      posts = data;
      displayPosts(posts, "latest-posts", "latest-post-card");
    })
    .catch((error) => {
      console.log(error);
    });
}

function goForward() {
  pageNumber++;
  if (Math.ceil(postsNumber / itemsForPage) == pageNumber) {
    nextBtnElement.disabled = true;
  }
  if (pageNumber != 1) {
    previousBtnElement.disabled = false;
  }
  fetch(
    `http://localhost:3000/posts?category=${categoryName}&_start=${
      (pageNumber - 1) * itemsForPage
    }&_limit=${itemsForPage}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      posts = data;
      displayPosts(posts, "latest-posts", "latest-post-card");
    })
    .catch((error) => {
      console.log(error);
    });
}
