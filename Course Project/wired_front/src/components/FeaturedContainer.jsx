import { useState, useEffect } from "react";
import Card from "./Card";
import "./FeaturedContainer.css";

export default function FeaturedContainer() {
  const [featuredPost, setfeaturedPost] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/posts?_limit=5")
      .then((response) => response.json())
      .then((data) => {
        setfeaturedPost(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="featured-container">
      <div className="card-container">
        <h1 className="section-header">Featured Stories</h1>

        <Card
          direction="row"
          postOfCard={featuredPost[0]}
          isDescHidden={false}
          isCategoryHidden={false}
          classes={"featured-card"}
        ></Card>
      </div>
      <div className="featured-sub-container">
        {featuredPost.map((post, index) => {
          if (index == 0) {
            return; //ommitting the first post
          }
          return (
            <Card
              key={post.id}
              postOfCard={post}
              isDescHidden={true}
              isAuthorHidden={true}
              direction="row"
              classes={"featured-sub-card"}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}
