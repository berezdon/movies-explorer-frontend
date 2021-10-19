import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import React, {useContext, useEffect, useState} from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import MainApi from "../../utils/MainApi/MainApi";
import filterSearchForm from "../../utils/FilterSearchForm/filterSearchForm";
import {searchMessage} from "../../utils/Constants/messages";
import cardDisplay from "../../utils/CardDisplay/cardDisplay";
import validationSearchForm from "../../utils/Validation/validationSearchForm";
import {errorTextMoviesForm} from "../../utils/Constants/errorText";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

function SavedMovies ({
                        isLogin,
                        isMain,
                        handleOpenNavigation,
                        isOpenMenu,
                        handleCloseNavigation,
                        saveMovies,
                        setSaveMovies,
                        onCardDislike,
                      }) {
  const value = useContext(CurrentUserContext);
  const [isOpenPreloader, setIsOpenPreloader] = React.useState(false);
  const [isOpenButtonMore, setIsOpenButtonMore] = useState(false);
  const [isOpenErrorMovies, setIsOpenErrorMovies] = useState(false);
  const [errorMassage, setErrorMassage] = useState('');
  const [moviesRemains, setMoviesRemains] = useState([]);
  const [saveMoviesDisplay, setSaveMoviesDisplay] = useState([]);
  const [durationSave, setDurationSave] = useState(false);

  useEffect(() => {
    value.handleTokenCheck();
    localStorage.setItem('url', '/saved-movies');
    setIsOpenPreloader(true);
    MainApi.getSaveMovies()
      .then((res) => {
        if (!res.ok) throw res;
        else return res.json();
      })
      .then((saveMoviesData) => {
        const saveMovies = isSaveFunction(saveMoviesData);
        setSaveMovies(saveMovies);
        setSaveMoviesDisplay(saveMovies);
        if (saveMovies.length > 0) {
          moviesLength('', saveMovies, true)
        }
        else {
          moviesLength(searchMessage, [], false)
        }
      })
      .finally(() => setIsOpenPreloader(false))
  },[])

  function isSaveFunction(saveMovies){
    let newArrayMovies = []
    saveMovies.forEach((saveMovie) => {
      if (value.currentUser._id === saveMovie.owner) newArrayMovies.push(saveMovie);
    })
    return newArrayMovies
  }

  function errorMovies(massage, bool) {
    setErrorMassage(massage);
    setIsOpenErrorMovies(bool);
  }

  function moviesLength(massage, movies, bool) {
    const cardsDisplay = cardDisplay(movies, setMoviesRemains, false);
    errorMovies(massage, !bool);
    if (cardsDisplay.bool) {
      setSaveMovies(cardsDisplay.displayedMovies);
      setIsOpenButtonMore(cardsDisplay.bool);
    } else {
      setSaveMovies(cardsDisplay.displayedMovies);
      setIsOpenButtonMore(cardsDisplay.bool);
    }
  }

  function searchMovies(phrase) {
    if (validationSearchForm(phrase)) {
      const moviesPart = filterSearchForm(saveMoviesDisplay, phrase, durationSave);
      if (moviesPart.length > 0) {
        moviesLength('', moviesPart, true)
      }
      else {
        moviesLength(searchMessage, [], false)
      }
    } else {
      value.setErrors(errorTextMoviesForm);
    }
  }

  return (
    <>
      <Header
        isLogin={isLogin}
        isMain={isMain}
        handleOpenNavigation={handleOpenNavigation}
      />
      <SearchForm
        searchMovies={searchMovies}
        duration={durationSave}
        setDuration={setDurationSave}
      />
      <Preloader
        isOpenPreloader={isOpenPreloader}
      />
      <MoviesCardList
        movies={saveMovies}
        setMovies={setSaveMovies}
        isOpenErrorMovies={isOpenErrorMovies}
        isOpenButtonMore={isOpenButtonMore}
        setIsOpenButtonMore={setIsOpenButtonMore}
        errorMassage={errorMassage}
        moviesRemains={moviesRemains}
        setMoviesRemains={setMoviesRemains}
        onCardDislike={onCardDislike}
        isSave={true}
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
