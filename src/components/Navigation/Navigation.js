import "./Navigation.css";
import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";
import profile from "../../images/icon-profile.svg";
import close from "../../images/close.svg";

function Navigation ({
                       isLogin,
                       isMain,
                       isOpenMenu,
                       handleCloseNavigation,
                     }) {
  function handleClickHome() {
    localStorage.setItem('url', '/');
  }
  return (
    <section className={`navigation ${isOpenMenu && 'navigation_open'}`}>
      <img className="navigation__close" src={close} alt="Закрыть" onClick={handleCloseNavigation}/>
      <ul className="navigation__content">
        <li className="navigation__li">
          <NavLink
            to='/'
            className={`navigation__link navigation__link_margin-top header__img ${!isMain && 'header__img_open'}`}
            onClick={handleCloseNavigation}
          >
            <p onClick={handleClickHome} className="navigation__link-text">Главная</p>
          </NavLink>
          <Link
            className={`navigation__link navigation__link_margin-top header__img ${isMain && 'header__img_open'}`}
            to="onTop" spy={true} smooth={true} duration={500}
            onClick={handleCloseNavigation}
          >
            <p className="navigation__link-text">Главная</p>
          </Link>

          <ul className={`navigation__ul navigation__menu navigation__menu_open`}>
            <li className="navigation__li">
              <NavLink
                to='/movies'
                className="navigation__link" activeClassName="navigation__active-link"
                onClick={handleCloseNavigation}
              >
                <p className="navigation__link-text">Фильмы</p>
              </NavLink>
            </li>
            <li className="navigation__li">
              <NavLink
                to='/saved-movies'
                className="navigation__link" activeClassName="navigation__active-link"
                onClick={handleCloseNavigation}
              >
                <p className="navigation__link-text">Сохранённые фильмы</p>
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="navigation__li">
          <NavLink className="header__link" to='/profile'>
            <button className="header__profile">
              <p className="header__profile-text">Аккаунт</p>
              <div className="header__icon-profile">
                <img className="logo" src={profile} alt={"Профиль пользователя"} />
              </div>
            </button>
          </NavLink>
        </li>
      </ul>
    </section>
  )
}

export default Navigation
