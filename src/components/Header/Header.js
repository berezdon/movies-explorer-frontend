import "./Header.css";
import logoHeader from "../../images/logo-header.svg";
import profile from "../../images/icon-profile.svg";
import {NavLink} from "react-router-dom";
import menu from "../../images/menu.svg";
import Authorization from "../Authorization/Authorization";
import NavTab from "../Main/NavTab/NavTab";
import {Link} from "react-scroll";

function Header ({
                   isLogin,
                   isMain,
                   handleOpenNavigation,
                 }) {
  return (
    <section className={`header ${!isMain && 'header_white'}`}>
      <NavLink to='/' className={`header__img ${!isMain && 'header__img_open'}`}>
        <img className="logo" src={logoHeader} alt={"Логотип в шапке сайта"} />
      </NavLink>
      <Link className={`header__img ${isMain && 'header__img_open'}`} to="onTop" spy={true} smooth={true} duration={500} >
        <img className="logo" src={logoHeader} alt={"Логотип в шапке сайта"} />
      </Link>
      <ul className={`header__nav-moves ${isLogin && !isMain && 'header__menu header__nav-moves_open'}`}>
        <li className="header__li">
          <NavLink to='/movies' className="header__link" activeClassName="header__active-link">
            <p className="header__link-text">Фильмы</p>
          </NavLink>
        </li>
        <li className="header__li">
          <NavLink to='/saved-movies' className="header__link" activeClassName="header__active-link">
            <p className="header__link-text">Сохранённые фильмы</p>
          </NavLink>
        </li>
      </ul>
      <NavTab
        isLogin={isLogin}
        isMain={isMain}
      />
      <NavLink className={`header__link header__link-profile ${isLogin && 'header__link-profile_open'}`} to='/profile'>
        <button className="header__profile">
          <p className="header__profile-text">Аккаунт</p>
          <div className="header__icon-profile">
            <img className="logo" src={profile} alt={"Профиль пользователя"} />
          </div>
        </button>
      </NavLink>
      <div className={`header__authorization ${!isLogin && 'header__authorization_open'}`}>
        <Authorization
          isLogin={isLogin}
          isMain={isMain}
        />
      </div>
      <img src={menu} alt="Меню навигации"
           className={`header__menu-navigation ${isLogin && 'header__menu-navigation_open'}`}
           onClick={handleOpenNavigation}
      />
    </section>
  )
}

export default Header
