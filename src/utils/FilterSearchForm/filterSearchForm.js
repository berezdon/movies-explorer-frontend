function FilterSearchForm(movies, phrase, duration) {
  let newArray = []

  if (duration) {
    movies.forEach((movie) => {
      if (movie.nameRU) {
        if (movie.nameRU.toLowerCase().indexOf(phrase.toLowerCase()) > 0 && movie.duration < 41) newArray.push(movie)
      } else if (movie.nameEN) {
        if (movie.nameEN.toLowerCase().indexOf(phrase.toLowerCase()) > 0 && movie.duration < 41) newArray.push(movie)
      }
    });
  } else {
    movies.forEach((movie) => {
      if (movie.nameRU) {
        if (movie.nameRU.toLowerCase().indexOf(phrase.toLowerCase()) > 0) newArray.push(movie)
      } else if (movie.nameEN) {
        if (movie.nameEN.toLowerCase().indexOf(phrase.toLowerCase()) > 0) newArray.push(movie)
      }
    });
  }

  return newArray;
}

export default FilterSearchForm
