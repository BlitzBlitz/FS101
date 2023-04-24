import "./Card.css";

function Card({ direction, postOfCard, isDescHidden, isCategoryHidden }) {
  return (
    <a
      href={"/posts.html?id=" + postOfCard.id}
      className={direction === "column" ? "card" : "card-row"}
      id={postOfCard.id}
    >
      <img src={postOfCard.imgUrl} alt="" />
      <div className="d-column">
        <span className={isCategoryHidden ? "hidden" : "category"}>
          {postOfCard.category.toUpperCase()}
        </span>
        <span className="title">{postOfCard.title}</span>
        <p className={isDescHidden ? "hidden" : "desc"}>{postOfCard.desc}</p>
        <span className="author">
          {postOfCard.author.name + " " + postOfCard.author.sirname}
        </span>
      </div>
    </a>
  );
}

export default Card;
