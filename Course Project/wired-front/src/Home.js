import Hero from "./Hero";
import "./Home.css";
import SidePostContainer from "./SidePostContainer";
export default function Home() {
  return (
    <div className="home">
      <Hero></Hero>
      <SidePostContainer></SidePostContainer>
    </div>
  );
}
