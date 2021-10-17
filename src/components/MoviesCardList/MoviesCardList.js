import {useEffect} from 'react';
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import cardDisplay from "../../utils/CardDisplay/cardDisplay";
import functionPush from "../../utils/FunctionPush/functionPush";

function MoviesCardList ({
                           movies,
                           setMovies,
                           isOpenButtonMore,
                           setIsOpenButtonMore,
                           isOpenErrorMovies,
                           errorMassage,
                           moviesRemains,
                           setMoviesRemains,
                         }) {
  useEffect(() => {
    window.addEventListener("resize", resizeThrottler, false);

    let resizeTimeout = 0;
    function resizeThrottler() {
      if ( !resizeTimeout ) {
        resizeTimeout = setTimeout(function() {
          resizeTimeout = null;
          actualResizeHandler();
        }, 66);
      }
    }

    function actualResizeHandler() {
      console.log('В мом проекте это не потребовалось, но на будущее пусть лежит тут');
    }
  },[]);


  function handleShowMoreMovies() {
    const cardsDisplay = cardDisplay(moviesRemains, setMoviesRemains, true);
    if (cardsDisplay.bool) {
      setMovies(functionPush(movies, cardsDisplay.displayedMovies));
      setIsOpenButtonMore(cardsDisplay.bool);
    } else {
      setMovies(functionPush(movies, cardsDisplay.displayedMovies));
      setIsOpenButtonMore(cardsDisplay.bool);
    }
  }

  return (
    <section className="movies-card-list">
      {movies.map((movie, key) => (
        <MoviesCard
          movie={movie}
          key={key}
        />
        ))}
      <span className={`movies-card-list__error ${isOpenErrorMovies && 'movies-card-list__error_open'}`}>
        {errorMassage}
      </span>
      <button type="button" onClick={handleShowMoreMovies}
              className={`movies-card-list__button ${isOpenButtonMore && 'movies-card-list__button_open'}`}
              aria-label="Найти">
        Ещё
      </button>
    </section>
  )
}

export default MoviesCardList
