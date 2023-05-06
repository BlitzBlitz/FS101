import { useParams } from "react-router-dom";
import "./Post.css";
import { useEffect, useState } from "react";
export default function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState();
  const [isPending, setIsPending] = useState(false);
  useEffect(() => {
    console.log(postId);
    setIsPending(true);
    fetch(`http://localhost:3000/posts?id=${postId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.at(0));
        setPost(data.at(0));
        setIsPending(false);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="post-page">
      {/* {isPending && <h1>Loading...</h1>} */}
      <div>
        <div className={isPending ? "isPending" : "content"}>
          <div>
            <span className="author">
              {post && post.author.name} {post && post.author.sirname}
            </span>
            <span>{post && post.category}</span>
            <span>{post && post.timestamp}</span>
          </div>
          <h1>{post && post.title}</h1>
          <p>{post && post.desc}</p>
        </div>
        <div className="image">
          <img src={post && post.imgUrl} alt="" />
        </div>
      </div>
    </div>
  );
}
