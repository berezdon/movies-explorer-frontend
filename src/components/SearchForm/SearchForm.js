import {useRef, useState} from 'react';
import "./SearchForm.css";
import search from "../../images/search.svg"

function SearchForm ({
                       searchMovies,
                       duration,
                       setDuration,
                     }) {
  const [searchValue, setSearchValue] = useState('');
  const refSearchMovies = useRef(null);

  function handleChangeSearch(evt) {
    setSearchValue(evt.target.value);
  }

  function handleSearchMovies(evt) {
    evt.preventDefault();
    const phrase = refSearchMovies.current.value
    searchMovies(phrase);
  }

  function handleChangeDuration() {
    setDuration(!duration);
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
            <input onChange={handleChangeDuration}
              className="search-form__input-slider" type="checkbox" checked={duration} />
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
