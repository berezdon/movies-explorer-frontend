import {useRef, useState, useContext, useEffect} from 'react';
import "./SearchForm.css";
import search from "../../images/search.svg"
import validationSearchForm from "../../utils/Validation/validationSearchForm";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {errorTextMoviesForm} from "../../utils/Constants/errorText";
import MovesApi from "../../utils/MoviesApi/MoviesApi";
import filterSearchForm from "../../utils/FilterSearchForm/filterSearchForm";
import {searchMessage} from "../../utils/Constants/messages";
import {errorMoviesMassage} from "../../utils/Constants/errorText";
import cardDisplay from "../../utils/CardDisplay/cardDisplay";

function SearchForm ({
                       setMovies,
                       setIsOpenPreloader,
                       setIsOpenErrorMovies,
                       setErrorMassage,
                       setIsOpenButtonMore,
                       setMoviesRemains,
                     }) {
  const value = useContext(CurrentUserContext);
  const [searchValue, setSearchValue] = useState('');
  const refSearchMovies = useRef(null);

  useEffect(() => {
    const phrase = localStorage.getItem('phrase');
    if (phrase) searchMoviesAPI(phrase);
  },[]);

  function handleChangeSearch(evt) {
    setSearchValue(evt.target.value);
  }

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
        .then((moves) => {
          const movies = filterSearchForm(moves, phrase);
          if (movies.length > 0) {
            moviesLength('', movies, true)
          }
          else {
            moviesLength(searchMessage, [], false)
          }
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

  function handleSearchMovies(evt) {
    evt.preventDefault();
    const phrase = refSearchMovies.current.value
    searchMoviesAPI(phrase);
  }

  return (
    <section className="search-form">
      <div className="search-form__content">
        <form onSubmit={handleSearchMovies} name="search-form" className="search-form__form" noValidate>
          <img src={search} alt="Найти фильм" />
          <input onChange={handleChangeSearch} type="text" value={searchValue}
                 className="search-form__input" placeholder="Фильм"
                 name="search-form__input" minLength="1" autoComplete="off"
                 ref={refSearchMovies} required/>
          <div className="search-form__vertical-line">
            <button type="submit" className="search-form__button" aria-label="Найти">Найти</button>
          </div>
        </form>
        <div className="search-form__short-movies">
          <label className="search-form__switch">
            <input className="search-form__input-slider" type="checkbox" />
            <span className="search-form__slider"/>
          </label>
          <p className="search-form__switch-text">Короткометражки</p>
        </div>
      </div>
      <div className="search-form__horizontal-line"/>
    </section>
  )
}

export default SearchForm
