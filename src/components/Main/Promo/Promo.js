import './Promo.css';
import logoPromo from '../../../images/logo-promo.svg'
import {Element, Link} from 'react-scroll'


function Promo () {
  return (
    <>
      <Element name="onTop" />
      <section className="promo">
        <div className="promo__info">
          <img className="promo__logo" src={logoPromo} alt="Логотип на странице о проекте"/>
          <div className="promo__info-text">
            <h1 className="promo__header">Учебный проект студента факультета Веб-разработки.</h1>
            <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          </div>
        </div>
        <button type="button" className="promo__button">
          <Link to="aboutTheProject" spy={true} smooth={true} duration={500} >Узнать больше</Link>
        </button>
      </section>
    </>
  )
}

export default Promo
