import React from 'react';
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import moves from "../../utils/Constants/moves";


function Movies ({
                   isLogin,
                   isMain,
                   handleOpenNavigation,
                   isOpenMenu,
                   handleCloseNavigation,
                 }) {
  return (
    <>
      <Header
        isLogin={isLogin}
        isMain={isMain}
        handleOpenNavigation={handleOpenNavigation}
      />
      <SearchForm />
      <MoviesCardList
        moves={moves}
      />
      <Navigation
        isLogin={isLogin}
        isMain={isMain}
        isOpenMenu={isOpenMenu}
        handleCloseNavigation={handleCloseNavigation}
      />
      <Footer />
    </>
  )
}

export default Movies
