import "./MoviesCard.css";
import like from "../../images/like.svg";
import likeActive from "../../images/like-active.svg";
import likeDelete from "../../images/like-delete.svg";
import convertToHours from "../../utils/ConvertToHours/convertToHours";

function MoviesCard ({
                       movie,
                       onCardLike,
                       onCardDislike,
                       isSave,
                     }) {
  function handleCardLike(movie) {
    onCardLike(movie);
  }

  function handleCardDislike(movie) {
    onCardDislike(movie)
  }

  return (
    <div className="movies-card">
      <a href={movie.trailerLink} target="_blank" rel="noopener noreferrer">
        <img className="movies-card__cover"
             src={isSave ? movie.image : `https://api.nomoreparties.co${movie.image.url}`}
             alt="Обложка фильма"/>
      </a>
      <div className="movies-card__container">
        <p className="movies-card__name">{movie.nameRU}</p>
        <p className="movies-card__duration">{convertToHours(movie.duration)}</p>
        <img onClick={() => handleCardLike(movie)}
             className={`movies-card__like ${!isSave && 'movies-card__like_open'}`} src={movie.isSave ? likeActive : like} alt="Лайк" />
        <img onClick={() => handleCardDislike(movie)}
             className={`movies-card__like ${isSave && 'movies-card__like_open'}`} src={likeDelete} alt="Удалить" />
      </div>
    </div>
  )
}

export default MoviesCard
