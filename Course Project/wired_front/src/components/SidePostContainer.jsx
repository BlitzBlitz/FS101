import "./SidePostContainer.css";
import { useFetch } from "../hooks/useFetch";
import Card from "./Card";
import CardPlaceholder from "./CardPlaceholder";
export default function SidePostContainer() {
  const { data, isLoading } = useFetch("http://localhost:3000/posts?_limit=3");
  const loadingCard = [1, 2, 3];

  return (
    <div className="recent-posts">
      <h1 className="section-header">Recent Posts</h1>

      {isLoading
        ? loadingCard.map((index) => (
            <CardPlaceholder
              direction="row"
              isDescHidden={true}
              isCategoryHidden={true}
              key={index}
            />
          ))
        : data &&
          data.map((post) => {
            return (
              <Card
                key={post.id}
                postOfCard={post}
                isDescHidden={true}
                isCategoryHidden={true}
                direction="row"
              ></Card>
            );
          })}
    </div>
  );
}
