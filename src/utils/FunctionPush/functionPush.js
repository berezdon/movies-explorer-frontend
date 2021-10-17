function functionPush(movies, displayedMovies) {
  let newArray = movies;
  displayedMovies.forEach((movie) => {
    newArray.push(movie);
  })

  return newArray;
}

export default functionPush
