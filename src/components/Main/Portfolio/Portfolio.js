import "./Portfolio.css";
import arrow from "../../../images/arrow.svg";

function Portfolio () {
  return (
    <ul className="about-me__ul">
      <li className="about-me__li">
        <p className="about-me__site-title">Статичный сайт</p>
        <img className="about-me__img-arrow" src={arrow} alt="Стрелка"/>
      </li>
      <li className="about-me__li">
        <p className="about-me__site-title">Адаптивный сайт</p>
        <img className="about-me__img-arrow" src={arrow} alt="Стрелка"/>
      </li>
      <li className="about-me__li">
        <p className="about-me__site-title">Одностраничное приложение</p>
        <img className="about-me__img-arrow" src={arrow} alt="Стрелка"/>
      </li>
    </ul>
  )
}

export default Portfolio
