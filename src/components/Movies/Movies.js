import React, {useContext, useEffect, useState} from 'react';
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import MainApi from "../../utils/MainApi/MainApi"
import validationSearchForm from "../../utils/Validation/validationSearchForm";
import MovesApi from "../../utils/MoviesApi/MoviesApi";
import filterSearchForm from "../../utils/FilterSearchForm/filterSearchForm";
import {searchMessage} from "../../utils/Constants/messages";
import {errorMoviesMassage, errorTextMoviesForm} from "../../utils/Constants/errorText";
import cardDisplay from "../../utils/CardDisplay/cardDisplay";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

function Movies ({
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
  const [movies, setMovies] = useState([]);
  const [isOpenPreloader, setIsOpenPreloader] = React.useState(false);
  const [isOpenButtonMore, setIsOpenButtonMore] = useState(false);
  const [isOpenErrorMovies, setIsOpenErrorMovies] = useState(false);
  const [errorMassage, setErrorMassage] = useState('');
  const [moviesRemains, setMoviesRemains] = useState([]);
  const [duration, setDuration] = useState(false);

  useEffect(() => {
    value.handleTokenCheck();
    const phrase = localStorage.getItem('phrase');
    localStorage.setItem('url', '/movies');
    if (phrase) searchMoviesAPI(phrase);
  },[]);

  function errorMovies(massage, bool) {
    setErrorMassage(massage);
    setIsOpenErrorMovies(bool);
  }

  function moviesLength(massage, movies, bool) {
    const cardsDisplay = cardDisplay(movies, setMoviesRemains, false);
    errorMovies(massage, !bool);
    if (cardsDisplay.bool) {
      setMovies(cardsDisplay.displayedMovies);
      setIsOpenButtonMore(cardsDisplay.bool);
    } else {
      setMovies(cardsDisplay.displayedMovies);
      setIsOpenButtonMore(cardsDisplay.bool);
    }
  }

  function searchMoviesAPI(phrase) {
    if (validationSearchForm(phrase)) {
      setIsOpenPreloader(true);
      localStorage.setItem('phrase', phrase);
      MovesApi.getMoves()
        .then((movies) => {
          isSaveFunction(movies)
            .then((movies) => {
              const moviesPart = filterSearchForm(movies, phrase, duration);
              if (moviesPart.length > 0) {
                moviesLength('', moviesPart, true)
              }
              else {
                moviesLength(searchMessage, [], false)
              }
            })
        })
        .catch(() => {
          moviesLength(errorMoviesMassage, [], false)
        })
        .finally(() => setIsOpenPreloader(false));
    } else {
      value.setErrors(errorTextMoviesForm);
      localStorage.setItem('phrase', '');
    }
  }

  function isSaveFunction(movies){
    return MainApi.getSaveMovies()
      .then((res) => {
        if (!res.ok) throw res;
        else return res.json();
      })
      .then((saveMovies) => {
        setSaveMovies(saveMovies);
        return movies.map((movie) => {
          saveMovies.forEach((saveMovie) => {
            if (saveMovie.movieId === movie.id && value.currentUser._id === saveMovie.owner) movie.isSave = true;
          })
          return movie
        })
      })
  }

  function saveMovie(movie) {
   return  saveMovies.find((saveMovie) => {
      return saveMovie.movieId === movie.id
    })
  }

  function onCardLike(movie) {
    if (movie.isSave) {
      movie.isSave = false;
      onCardDislike(saveMovie(movie));
    } else {
      MainApi.postSaveMovie(movie)
        .then((res) => {
          if (!res.ok) throw res;
          else return res.json();
        })
        .then((newCard) => {
          movie.isSave = true;
          setSaveMovies([...saveMovies, newCard])
        })
        .catch((err) => {
          value.setErrors(err);
        })
    }
  }

  return (
    <main>
      <Header
        isLogin={isLogin}
        isMain={isMain}
        handleOpenNavigation={handleOpenNavigation}
      />
      <SearchForm
        searchMovies={searchMoviesAPI}
        duration={duration}
        setDuration={setDuration}
      />
      <Preloader
        isOpenPreloader={isOpenPreloader}
      />
      <MoviesCardList
        movies={movies}
        setMovies={setMovies}
        isOpenErrorMovies={isOpenErrorMovies}
        isOpenButtonMore={isOpenButtonMore}
        setIsOpenButtonMore={setIsOpenButtonMore}
        errorMassage={errorMassage}
        moviesRemains={moviesRemains}
        setMoviesRemains={setMoviesRemains}
        onCardLike={onCardLike}
        onCardDislike={onCardDislike}
        isSave={false}
      />
      <Navigation
        isLogin={isLogin}
        isMain={isMain}
        isOpenMenu={isOpenMenu}
        handleCloseNavigation={handleCloseNavigation}
      />
      <Footer />
    </main>
  )
}

export default Movies
