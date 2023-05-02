import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Category from "./pages/Category";
import SideMenu from "./components/SideMenu";
import { useState } from "react";

function App() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [categoryName, setCategoryName] = useState("");
  return (
    <div className="app">
      <Navbar
        isSideMenuOpen={isSideMenuOpen}
        setIsSideMenuOpen={setIsSideMenuOpen}
        setCurrentPage={setCurrentPage}
        setCategoryName={setCategoryName}
      ></Navbar>
      {isSideMenuOpen && <SideMenu></SideMenu>}

      {currentPage === "home" && <Home></Home>}
      {currentPage === "category" && (
        <Category categoryName={categoryName}></Category>
      )}
    </div>
  );
}

export default App;
