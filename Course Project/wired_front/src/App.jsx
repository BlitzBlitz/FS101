import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Search from "./pages/Search";
import SideMenu from "./components/SideMenu";
import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Post from "./pages/Post";

function App() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <div className="app">
      <BrowserRouter>
        {" "}
        currentPath ="/category/Business"
        <Navbar
          isSideMenuOpen={isSideMenuOpen}
          setIsSideMenuOpen={setIsSideMenuOpen}
        ></Navbar>
        {isSideMenuOpen && (
          <SideMenu setIsSideMenuOpen={setIsSideMenuOpen}></SideMenu>
        )}
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/category/:categoryTitle">
            <Category></Category>
          </Route>
          <Route path="/search">
            <Search></Search>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/post/:postId">
            <Post></Post>
          </Route>
          <Route path="/*">
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
