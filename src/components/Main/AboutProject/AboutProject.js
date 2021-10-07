import { Element } from 'react-scroll';
import "./AboutProject.css";

function AboutProject () {
  return (
    <>
      <Element name="aboutTheProject" />
      <section className="about-project">
        <h2 className="about-project__title">О проекте</h2>
        <ul className="about-project__ul">
          <li className="about-project__li">
            <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </li>
          <li className="about-project__li">
            <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </li>
        </ul>
        <div className="about-project__grid">
          <p className="about-project__grid-text about-project__grid-text_first-week">1 неделя</p>
          <p className="about-project__grid-text about-project__grid-text_four-weeks">4 недели</p>
          <p className="about-project__grid-text about-project__grid-text_color-grey">Back-end</p>
          <p className="about-project__grid-text about-project__grid-text_color-grey">Front-end</p>
        </div>
      </section>
    </>
  )
}

export default AboutProject
