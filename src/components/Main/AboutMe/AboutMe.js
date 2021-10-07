import "./AboutMe.css";
import profile from "../../../images/profile.jpg";
import NavLink from "./NavLink/NavLink";
import Portfolio from "../Portfolio/Portfolio";
import {Element} from "react-scroll";

function AboutMe () {
  return (
    <>
      <Element name="aboutMe" />
      <section className="about-project about-me">
        <h2 className="about-project__title about-me__title">Студент</h2>
        <div className="about-me__info">
          <img className="about-me__img" src={profile} alt="Фотография студента"/>
          <div className="about-me__info-text">
            <h3 className="about-me__name">Максим</h3>
            <p className="about-me__specialization">Фронтенд-разработчик, 31 год</p>
            <p className="about-me__about-me">Я родился в Костроме, а живу в Москве, учусь в ВШЭ на факультете математики в магистратуре.
              У меня есть жена и сын. Я люблю играть в ролевые игры, а ещё увлекаюсь исторической реконструкцией.
              Кодить начал уже давно, но недавно начал изучать React. С 2019 года работаю в компании «ЦПМ».
              После того, как прошёл курс по веб-разработке, начал заниматься более серьёзными проектами.
            </p>
            <NavLink isFooter={false} />
          </div>
        </div>
        <p className="about-me__portfolio">Портфолио</p>
        <Portfolio />
      </section>
    </>

  )
}

export default AboutMe
