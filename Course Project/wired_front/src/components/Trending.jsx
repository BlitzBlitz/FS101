import Card from "./Card";
import "./Trending.css";
import { useState, useEffect } from "react";
// import { useFetch } from "../hooks/useFetch";
export default function Trending() {
  const [trendingStories, setTrendingStories] = useState([]);
  // const posts = useFetch("http://localhost:3000/posts&_limit=4");
  // setTrendingStories(posts);
  useEffect(() => {
    fetch("http://localhost:3000/posts?_limit=4")
      .then((response) => response.json())
      .then((data) => {
        setTrendingStories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="trending-stories">
      <div className="card-container">
        <h1 className="section-header">Trending Stories</h1>
        {trendingStories &&
          trendingStories.map((post) => {
            return (
              <Card
                key={post.id}
                postOfCard={post}
                isDescHidden={false}
                isCategoryHidden={false}
                direction="column"
                classes="card-trending"
              ></Card>
            );
          })}
      </div>
    </div>
  );
}
