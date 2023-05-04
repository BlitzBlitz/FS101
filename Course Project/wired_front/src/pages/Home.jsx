import FeaturedContainer from "../components/FeaturedContainer";
import Hero from "../components/Hero";
import "./Home.css";
import SidePostContainer from "../components/SidePostContainer";
import Trending from "../components/Trending";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="home">
        <Hero></Hero>
        <SidePostContainer></SidePostContainer>
      </div>
      <Trending></Trending>
      <FeaturedContainer></FeaturedContainer>
      <Footer></Footer>
    </>
  );
}
