import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList ({
                           moves,
                         }) {
  return (
    <section className="movies-card-list">
      {moves.map((move, key) => (
        <MoviesCard
          move={move}
          key={key}
        />
        ))}
      <buton type="button" className="movies-card-list__button" aria-label="Найти">Ещё</buton>
    </section>
  )
}

export default MoviesCardList
