import React, {useState} from 'react';
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

function Movies ({
                   isLogin,
                   isMain,
                   handleOpenNavigation,
                   isOpenMenu,
                   handleCloseNavigation,
                 }) {
  const [movies, setMovies] = useState([]);
  const [isOpenPreloader, setIsOpenPreloader] = React.useState(false);
  const [isOpenButtonMore, setIsOpenButtonMore] = useState(false);
  const [isOpenErrorMovies, setIsOpenErrorMovies] = useState(false);
  const [errorMassage, setErrorMassage] = useState('');
  const [moviesRemains, setMoviesRemains] = useState([]);

  return (
    <main>
      <Header
        isLogin={isLogin}
        isMain={isMain}
        handleOpenNavigation={handleOpenNavigation}
      />
      <SearchForm
        setMovies={setMovies}
        setIsOpenPreloader={setIsOpenPreloader}
        setIsOpenErrorMovies={setIsOpenErrorMovies}
        setErrorMassage={setErrorMassage}
        setIsOpenButtonMore={setIsOpenButtonMore}
        setMoviesRemains={setMoviesRemains}
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
