import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import saveMoves from "../../utils/SaveMoves/saveMoves";
import { moves } from "../../utils/Constants/moves";


function SavedMovies ({
                        isLogin,
                        isMain,
                        handleOpenNavigation,
                        isOpenMenu,
                        handleCloseNavigation
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
        moves={saveMoves(moves)}
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

export default SavedMovies
