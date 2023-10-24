/* 
EJERCICIO 12:
Filtra las peliculas que pertenezcan a la categoria "Drama" e incluye solo el título y la descripción
Sugerencia: puedes usar la variable "categories" en el archivo "src/js/data/movies.js"
*/

function filterMovies() {
    var movs = [];
    var fmovs = movies.filter((movie) => { return movie.category === "Drama"});
    for(const mov of fmovs) {
        movs.push({
            title: mov.title,
            desc: mov.description
        })
    }
    return movs    
}
  
  showContent(12, filterMovies());
  