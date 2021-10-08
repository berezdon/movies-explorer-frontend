function saveMoves (moves) {
  const saveMoves = []
  moves.forEach((move) => {
    if (move.isLike) {
      move.isSave = true;
      saveMoves.push(move);
    }
  })
  return saveMoves
}

export default saveMoves
