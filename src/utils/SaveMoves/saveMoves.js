function saveMoves (moves) {
  const saveMoves = []
  moves.forEach((move) => {
    if (move.isLike) saveMoves.push(move);
  })
  return saveMoves
}

export default saveMoves
