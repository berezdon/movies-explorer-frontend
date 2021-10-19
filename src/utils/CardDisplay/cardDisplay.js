function cardDisplay(movies, setMoviesRemains, more) {
  const screenWidth = window.screen.width;
  const displayedMovies = {};
  if (screenWidth > 480) {
    displayedMovies.displayedMovies = movies.filter((elem, index) => index < 7);
    displayedMovies.bool = movies.length > 7;
    if ( movies.length > 7) setMoviesRemains(movies.filter((elem, index) => index > 6));
  }
  else {
    if (!more) {
      displayedMovies.displayedMovies = movies.filter((elem, index) => index < 5);
      displayedMovies.bool = movies.length > 5;
      if ( movies.length > 5) setMoviesRemains(movies.filter((elem, index) => index > 4));
    } else {
      displayedMovies.displayedMovies = movies.filter((elem, index) => index < 2);
      displayedMovies.bool = movies.length > 2;
      if ( movies.length > 2) setMoviesRemains(movies.filter((elem, index) => index > 1));
    }
  }

  return displayedMovies;
}

export default cardDisplay
