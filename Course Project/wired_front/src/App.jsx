import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Search from "./pages/Search";
import SideMenu from "./components/SideMenu";
import { useContext, useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Post from "./pages/Post";
import { Modal } from "./components/Modal";
import Subscribe from "./components/Subscribe";
import { useTheme } from "./hooks/useTheme";

function App() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  useTheme();
  return (
    <div className="app">
      <BrowserRouter>
        {" "}
        currentPath ="/category/Business"
        <Navbar
          isSideMenuOpen={isSideMenuOpen}
          setIsSideMenuOpen={setIsSideMenuOpen}
        />
        {isSideMenuOpen && <SideMenu setIsSideMenuOpen={setIsSideMenuOpen} />}
        {isModalOpen && (
          <Modal setIsModalOpen={setIsModalOpen}>
            <Subscribe direction={"column"} />
          </Modal>
        )}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/category/:categoryTitle">
            <Category />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/post/:postId">
            <Post />
          </Route>
          <Route path="/*">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
