import FeaturedContainer from "./FeaturedContainer";
import Hero from "./Hero";
import "./Home.css";
import SidePostContainer from "./SidePostContainer";
import Trending from "./Trending";

export default function Home() {
  return (
    <>
      <div className="home">
        <Hero></Hero>
        <SidePostContainer></SidePostContainer>
      </div>
      <Trending></Trending>
      <FeaturedContainer></FeaturedContainer>
    </>
  );
}
