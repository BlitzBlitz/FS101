import "./Hero.css";
import Card from "./Card";
import { useFetch } from "../hooks/useFetch";
import CardPlaceholder from "./CardPlaceholder";
export default function Hero() {
  // const fetchInfo = useFetch("http://localhost:3000/posts?_limit=3");
  // const {data, isLoading} = {data, isLoading}; => const data = fetchInfo.data, const data = fetchInfo.isLoading;
  const { data, isLoading } = useFetch(
    "http://localhost:8000/api/posts?limit=5"
  );
  const loadingCard = [1, 2, 3];
  return (
    <div className="main-hero">
      <h1 className="section-header">Today Picks</h1>

      {isLoading
        ? loadingCard.map((index) => (
            <CardPlaceholder direction="column" isDescHidden={index != 2} />
          ))
        : data &&
          data.map((post, index) => {
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
