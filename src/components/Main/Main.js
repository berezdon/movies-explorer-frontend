import Header from "../Header/Header";
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import React from "react";
import NavTab from "./NavTab/NavTab";

function Main ({
                 isMain,
                 isLogin,
                 handleOpenNavigation,
                 isOpenMenu,
                 handleCloseNavigation,
               }
) {
  return (
    <>
      <Header
        isLogin={isLogin}
        isMain={isMain}
        handleOpenNavigation={handleOpenNavigation}
      />
      <Promo />
      <NavTab
        isLogin={isLogin}
        isMain={isMain}
      />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer />
      <Navigation
        isLogin={isLogin}
        isMain={isMain}
        isOpenMenu={isOpenMenu}
        handleCloseNavigation={handleCloseNavigation}
      />
    </>
  )
}

export default Main
