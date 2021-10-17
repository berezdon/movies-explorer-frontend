function convertToHours(minutes) {
  const intMinutes = Number(minutes);
  if (minutes < 60) return `${minutes}м`
  else if (minutes % 60 === 0) return `${Math.round(minutes / 60)}ч`
  else return `${Math.round((minutes - intMinutes % 60) /60)}ч ${intMinutes % 60}м`;
}

export default convertToHours
