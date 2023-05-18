import Card from "./Card";
import "./Trending.css";
import { useFetch } from "../hooks/useFetch";
import CardPlaceholder from "./CardPlaceholder";
export default function Trending() {
  const { data: trendingStories, isLoading } = useFetch(
    "http://localhost:3000/posts?_limit=4"
  );
  const loadingCard = [1, 2, 3, 4];

  return (
    <div className="trending-stories">
      <div className="card-container">
        <h1 className="section-header">Trending Stories</h1>
        {isLoading
          ? loadingCard.map((index) => (
              <CardPlaceholder direction="column" key={index} />
            ))
          : trendingStories &&
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
