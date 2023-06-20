import { useState } from "react";
import MainMenu from "../nav/MainMenu";
import Search from "./Search";
import logo from "../img/logo.png";
// import { getFabUtilityClass } from "@mui/material";
import { useNavigate } from "react-router-dom";

const links = [
    {
      link: "Home",
      path: "/",
    },
    {
      link: "Movies",
      path: "/movies",
    },
    {
      link: "About",
      path: "/about",
    },
    {
      link: "Contacts",
      path: "/contacts",
    },

]

function Header() {
  const [isBurgerActive, setBurgerActive] = useState(false);
  const navigate = useNavigate();

  function toggleBurger() {
    setBurgerActive(!isBurgerActive);
  }
  
  function redirectHome() {
    navigate("/");
  }

  return (
    <header >
      <div className={isBurgerActive ? 'header active' : 'header'}>
        <div 
          className="logo" 
          onClick={redirectHome}
        >
          <img src={logo} alt="logo"></img>
        </div>
        <MainMenu links={links}/>
        <div className="search">
          {/* <input type="text" /> */}
          <Search />
        </div>
        <div 
          className={isBurgerActive ? "burger-menu active" : "burger-menu"} 
          onClick={toggleBurger}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;