import { useParams } from "react-router-dom";
import "./Post.css";
import { useFetch } from "../hooks/useFetch";
import SidePostContainer from "../components/SidePostContainer";
import Footer from "../components/Footer";
export default function Post() {
  const { postId } = useParams();
  const { data: posts, isLoading } = useFetch(
    `http://localhost:3000/posts?id=${postId}`
  );
  return (
    <div>
      <div className="post-page">
        {/* {isPending && <h1>Loading...</h1>} */}
        <div className="postContainer">
          {posts &&
            posts.map((post) => (
              <div>
                <div className={isLoading ? "isPending" : ""}>
                  <div className="my-2">
                    <span className="post-author">
                      {post.author.name} {post.author.sirname}
                    </span>
                    <span className="post-category">
                      {post.category.toUpperCase()}
                    </span>
                    <span className="post-time">
                      {new Date(post.timestamp).toString()}
                    </span>
                  </div>
                  <h1 className="post-title">{post.title}</h1>
                  <p className="desc">{post.desc}</p>
                </div>
                <div className="post-image">
                  <img src={post.imgUrl} alt="" />
                </div>
                {post.content.map((paragraph) => (
                  <div>
                    <p className="content-p">{paragraph}</p>
                    <br />
                  </div>
                ))}
              </div>
            ))}
        </div>
        <SidePostContainer></SidePostContainer>
      </div>
      <Footer></Footer>
    </div>
  );
}
