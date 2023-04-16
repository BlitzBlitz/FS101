import getRequest from "./fetch";
import { postData } from "./fetch";

let categories = [];
let todaysPickPosts = [];
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

fetch("http://localhost:3000/posts?_limit=3")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
    todaysPickPosts = data.filter((post) => post.timestamp > 1681013672240);
    // let filteredPost = [];
    // for (let index = 0; index < data.length; index++) {
    //   if (data[index].timestamp > 1681013672250) {
    //     filteredPost.push(data[index]);
    //   }
    // }
    console.log(todaysPickPosts);
    todaysPickPosts.sort((post1, post2) => post2.views - post1.views);
    // for (let i = 0; i < data.length; i++) {
    //   let post1 = data[i];
    //   for (let j = 0; j < array.length; j++) {
    //     const post2 = array[j];
    //     if(post2.views - post1.views > 0){
    //       //swap
    //       let tmp = post1;
    //       post1 = post2;
    //       post2 = tmp;
    //     }

    //   }
    // }
    console.log(todaysPickPosts);
    displayTodaysPicks();
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

function displayTodaysPicks() {
  let innerMiddleElement = document.getElementById("inner-middle");
  let headlineContainer = document.createElement("div");
  headlineContainer.classList.add("headline");
  headlineContainer.innerHTML = `
    <img src="./${todaysPickPosts[0].imgUrl}" alt="" />
    <label for="">NO JOKE</label>
    <br />
    <span
      ><a href="/posts.html?id=${todaysPickPosts[0].id}"
        >${todaysPickPosts[0].title}</a
      ></span
    >
    <p>${todaysPickPosts[0].desc}
    </p>
    <label for="">${
      todaysPickPosts[0].author.name + " " + todaysPickPosts[0].author.sirname
    }</label>
  `;
  innerMiddleElement.append(headlineContainer);

  let innerLeftContainer = document.getElementById("inner-left");
  for (let index = 1; index < todaysPickPosts.length; index++) {
    const todaysPost = todaysPickPosts[index];
    let postElement = document.createElement("div");
    postElement.classList.add("left-news");
    postElement.innerHTML = `
    
      <img src="./${todaysPost.imgUrl}" alt="" />
      <label for="">NO JOKE</label>
      <span
        ><a href="/posts.html?id=${todaysPost.id}"
          >${todaysPost.title}</a
        ></span
      >
      <label for="">${
        todaysPost.author.name + " " + todaysPost.author.sirname
      }</label>
      <hr/>
    `;
    innerLeftContainer.append(postElement);
  }
}
