import "./CardPlaceholder.css";

function CardPlaceholder({
  classes,
  direction,
  isDescHidden,
  isCategoryHidden,
}) {
  let directionClass = direction === "column" ? "card" : "card-row";
  return (
    <div className={directionClass + " " + classes}>
      <img src="" alt="" className="loading" />
      <div className="d-column">
        <span
          className={
            (isCategoryHidden ? "hidden" : "category") +
            " loading max-width-content"
          }
        >
          Sports
        </span>
        <span className="title loading max-width-content">
          This is a placeholder post title
        </span>
        <p
          className={
            (isDescHidden ? "hidden" : "desc") + " loading max-width-content"
          }
        >
          Lorem ipsum dolor sit amet
        </p>

        <span className="author loading max-width-content">Place Holder</span>
      </div>
    </div>
  );
}

export default CardPlaceholder;
