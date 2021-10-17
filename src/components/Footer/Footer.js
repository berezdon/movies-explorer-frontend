import "./Footer.css";

function Footer () {
  return (
    <section className="footer">
      <div className="footer__underline">
        <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      </div>
      <ul className="footer__ul">
        <ul className="footer__ul footer__ul_links">
          <li className="footer__li">
            <a href="https://practicum.yandex.ru" className="footer__link" target="_blank" rel="noopener noreferrer">
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__li">
            <a href="https://github.com/berezdon" className="footer__link" target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </li>
          <li className="footer__li">
            <a href="https://vk.com/berezdon" className="footer__link" target="_blank" rel="noopener noreferrer">
              Вконтакте
            </a>
          </li>
        </ul>
        <li className="footer__li"><p className="footer__copy">&copy; {new Date().getFullYear()}</p></li>
      </ul>

    </section>
  )
}

export default Footer
