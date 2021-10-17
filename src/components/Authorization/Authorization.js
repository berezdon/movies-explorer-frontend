import {NavLink} from "react-router-dom";

function Authorization ({
                          isLogin,
                          isMain,
                        }) {
  return (
    <nav className={`menu-avt ${!isLogin && isMain && 'menu-avt_open'}`}>
      <ul className="menu__list">
        <li className="menu__list-item">
          <NavLink to='/signup' className="menu__link">Регистрация</NavLink>
        </li>
        <li className="menu__list-item">
          <NavLink to='/signin' className="menu__link menu__link_login" >Войти</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Authorization
