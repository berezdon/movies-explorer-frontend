import "./MoviesCard.css";
import like from "../../images/like.svg";
import likeActive from "../../images/like-active.svg";
import likeDelete from "../../images/like-delete.svg";

function MoviesCard ({
                       move,
                       key,
                     }) {
  return (
    <section key={key} className="movies-card">
      <img className="movies-card__cover" src={move.cover} alt="Обложка фильма"/>
      <div className="movies-card__container">
        <p className="movies-card__name">{move.name}</p>
        <p className="movies-card__duration">{move.duration}</p>
        <img className="movies-card__like" src={move.isLike ? move.isSave ? likeDelete : likeActive : like} alt="Лайк" />
      </div>
    </section>
  )
}

export default MoviesCard
