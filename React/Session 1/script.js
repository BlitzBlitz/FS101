import { fetchData } from "./fetch.js";
fetchData("http://localhost:3000/categories", displayData, displayError);

function displayData(data) {
  console.log(data);
}
function displayError(error) {
  console.log(error);
}
