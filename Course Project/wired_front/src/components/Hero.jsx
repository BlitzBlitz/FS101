import Card from "./Card";
import { useState, useEffect } from "react";
import "./Hero.css";
export default function Hero() {
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts?_limit=3")
      .then((response) => response.json())
      .then((data) => {
        setPostsList(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="main-hero">
      <h1 className="section-header">Today Picks</h1>
      {postsList.map((post, index) => {
        return (
          <Card
            key={post.id}
            postOfCard={post}
            isDescHidden={index !== 0}
            direction="column"
          ></Card>
        );
      })}
    </div>
  );
}
