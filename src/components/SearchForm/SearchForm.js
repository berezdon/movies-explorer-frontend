import React from 'react';
import "./SearchForm.css";
import search from "../../images/search.svg";

function SearchForm () {
  const [searchValue, setSearchValue] = React.useState('')

  function handleChangeSearch(evt) {
    setSearchValue(evt.target.value);
  }

  return (
    <section className="search-form">
      <div className="search-form__content">
        <form name="search-form" className="search-form__form" noValidate>
          <img src={search} alt="Найти фильм" />
          <input onChange={handleChangeSearch} type="text" value={searchValue}
                 className="search-form__input" placeholder="Фильм"
                 name="search-form__input" minLength="1" autoComplete="off" />
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
