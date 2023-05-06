import { useEffect, useState } from "react";
import Card from "../components/Card";
import "./Search.css";

export default function Search() {
  const [posts, setPosts] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/posts");
  const [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    fetch(`${url}?desc_like=${keyword}`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }
  function sort(event) {
    const sortBy = event.target.value;
    console.log(sortBy);
    let sortFunction;
    if (sortBy === "name") {
      sortFunction = (post1, post2) => {
        if (post1.title > post2.title) {
          return 1;
        } else if (post1.title < post2.title) {
          return -1;
        }
        return 0;
      };
    } else {
      sortFunction = (post1, post2) => {
        if (post1.timestamp > post2.timestamp) {
          return 1;
        } else if (post1.timestamp < post2.timestamp) {
          return -1;
        }
        return 0;
      };
    }
    setPosts((prevPost) => {
      const sorted = prevPost.sort(sortFunction);
      const deepCopy = [...sorted]; //to trigger an UI update
      return deepCopy;
    });
    console.log(posts);
  }
  return (
    <div className="padding-t-5">
      <h1>Search stories from WIRED</h1>
      <div>
        <form onSubmit={(e) => search(e)}>
          <div className="input-group">
            <i className="fa-search"></i>
            <input
              type="text"
              name="keyword"
              onChange={(e) => setKeyword(e.target.value)}
              placeholder='Try "Recial justice"'
            />
          </div>
          <button type="submit">Search</button>
          <div>
            <span>Sort by</span>
            <select name="" id="" onChange={(event) => sort(event)}>
              <option value="name">Name</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </form>
      </div>
      <div className="card-container column">
        {posts &&
          posts.map((post) => <Card key={post.id} postOfCard={post}></Card>)}
      </div>
    </div>
  );
}
