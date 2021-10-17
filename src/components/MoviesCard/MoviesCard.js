import "./MoviesCard.css";
import like from "../../images/like.svg";
import likeActive from "../../images/like-active.svg";
import likeDelete from "../../images/like-delete.svg";
import convertToHours from "../../utils/ConvertToHours/convertToHours";

function MoviesCard ({
                       movie,
                     }) {
  return (
    <a href={movie.trailerLink} className="movies-card" target="_blank" rel="noopener noreferrer">
      <img className="movies-card__cover" src={`https://api.nomoreparties.co${movie.image.url}`} alt="Обложка фильма"/>
      <div className="movies-card__container">
        <p className="movies-card__name">{movie.nameRU}</p>
        <p className="movies-card__duration">{convertToHours(movie.duration)}</p>
        <img className="movies-card__like" src={movie.isLike ? movie.isSave ? likeDelete : likeActive : like} alt="Лайк" />
      </div>
    </a>
  )
}

export default MoviesCard
