import "./Preloader.css";
import preloader from "../../images/oval.svg";

function Preloader({
                     isOpenPreloader,
                   }) {
  return (
    <section className={`preloader ${isOpenPreloader && 'preloader_open'}`}>
      <img className="preloader_svg" src={preloader} alt="Прелоадер" />
    </section>
  )
}

export default Preloader
