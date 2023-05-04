import { useEffect, useState } from "react";
import Card from "../components/Card";
import "./Search.css";

export default function Search() {
  const [posts, setPosts] = useState();
  const [url, setUrl] = useState("http://localhost:3000/posts");
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    console.log("Fetching");
    console.log(posts);
    fetch(`${url}?title=${keyword}`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, [url, keyword]);
  function search(event) {
    event.preventDefault();
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
        </form>
        <div>
          <span>Sort by</span>
          <select name="" id="">
            <option value="">Relevance</option>
            <option value="">Newest</option>
          </select>
        </div>
      </div>
      <div className="card-container column">
        {posts &&
          posts.map((post) => <Card key={post.id} postOfCard={post}></Card>)}
      </div>
    </div>
  );
}
