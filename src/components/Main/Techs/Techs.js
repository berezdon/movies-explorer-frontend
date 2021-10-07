import "./Techs.css"
import {Element} from "react-scroll";

function Techs () {
  return (
    <>
      <Element name="techs" />
      <section className="techs">
        <h2 className="about-project__title">Технологии</h2>
        <h3 className="techs__subtitle">7 технологий</h3>
        <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="techs__grid">
          <li className="about-project__grid-text techs__grid-text">HTML</li>
          <li className="about-project__grid-text techs__grid-text">CSS</li>
          <li className="about-project__grid-text techs__grid-text">JS</li>
          <li className="about-project__grid-text techs__grid-text">React</li>
          <li className="about-project__grid-text techs__grid-text">Git</li>
          <li className="about-project__grid-text techs__grid-text">Express.js</li>
          <li className="about-project__grid-text techs__grid-text">mongoDB</li>
        </ul>
      </section>
    </>
  )
}

export default Techs
