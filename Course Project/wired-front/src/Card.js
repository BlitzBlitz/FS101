import "./Card.css";

function Card({
  classes,
  direction,
  postOfCard,
  isDescHidden,
  isCategoryHidden,
  isAuthorHidden,
}) {
  let directionClass = direction === "column" ? "card" : "card-row";
  return (
    <a
      href={"/posts.html?id=" + postOfCard.id}
      className={directionClass + " " + classes}
      id={postOfCard.id}
    >
      <img src={postOfCard.imgUrl} alt="" />
      <div className="d-column">
        <span className={isCategoryHidden ? "hidden" : "category"}>
          {postOfCard.category.toUpperCase()}
        </span>
        <span className="title">{postOfCard.title}</span>
        <p className={isDescHidden ? "hidden" : "desc"}>{postOfCard.desc}</p>

        <span className={isAuthorHidden ? "hidden" : "author"}>
          {postOfCard.author.name + " " + postOfCard.author.sirname}
        </span>
      </div>
    </a>
  );
}

export default Card;
