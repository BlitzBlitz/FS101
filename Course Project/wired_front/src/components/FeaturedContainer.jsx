import { useState, useEffect } from "react";
import Card from "./Card";
import "./FeaturedContainer.css";
import { useFetch } from "../hooks/useFetch";
import CardPlaceholder from "./CardPlaceholder";

export default function FeaturedContainer() {
  const { data: featuredPost, isLoading } = useFetch(
    "http://localhost:3000/posts?_limit=4"
  );
  const loadingCard = [1, 2, 3, 4];
  return (
    <div className="featured-container">
      <div className="card-container">
        <h1 className="section-header">Featured Stories</h1>

        {isLoading ? (
          <CardPlaceholder
            direction="row"
            isDescHidden={false}
            isCategoryHidden={false}
            classes={"featured-card py-15"}
          />
        ) : (
          featuredPost && (
            <Card
              direction="row"
              postOfCard={featuredPost[0]}
              isDescHidden={false}
              isCategoryHidden={false}
              classes={"featured-card"}
            ></Card>
          )
        )}
      </div>
      <div className="featured-sub-container">
        {isLoading
          ? loadingCard.map((index) => (
              <CardPlaceholder direction="column" key={index} />
            ))
          : featuredPost &&
            featuredPost.map((post, index) => {
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
