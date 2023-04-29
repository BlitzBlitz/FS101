import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import SideMenu from "./SideMenu";
import { useState } from "react";
import Footer from "./Footer";

function App() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <div className="app">
      <Navbar
        isSideMenuOpen={isSideMenuOpen}
        setIsSideMenuOpen={setIsSideMenuOpen}
      ></Navbar>
      {isSideMenuOpen && <SideMenu></SideMenu>}

      {!isSideMenuOpen && <Home></Home>}
      <Footer></Footer>
    </div>
  );
}

export default App;
