import "./NavTab.css";
import {Link} from "react-scroll";

function NavTab ({
                   isLogin,
                   isMain,
                 }) {
  return (
    <nav className={`menu ${isLogin && isMain && 'menu_open'}`}>
      <ul className="menu__list">
        <li className="menu__list-item">
          <Link to="aboutTheProject" spy={true} smooth={true} duration={500} >О проекте</Link>
        </li>
        <li className="menu__list-item">
          <Link to="techs" spy={true} smooth={true} duration={500} >Технологии</Link>
        </li>
        <li className="menu__list-item">
          <Link to="aboutMe" spy={true} smooth={true} duration={500} >Студент</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavTab
