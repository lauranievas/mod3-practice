/* 
EJERCICIO 11:
Ordena las peliculas por valoracion (propiedad "rating") de mayor a menor
*/

function sortMovies(a, b) {
  const rating1 = a.rating;
  const rating2 = b.rating;

  if (rating1 < rating2) return -1;
  if (rating1 > rating2) return 1;
  return 0;
}

const arrayMovies = movies.map((movie) => movie.title);
const sortedMovies = arrayMovies.sort(sortMovies);

showContent(11, sortedMovies);
