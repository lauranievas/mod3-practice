/* 
EJERCICIO 15:
Muestra un array con el título y la descripción de las mejores peliculas ordenadas de mejor a peor, 
siendo las mejores aquellas cuya valoración es superior a la valoración media de todas las películas
*/

function getBestRatedFilms() {
    let total = 0;
    let average = 0;
    var returnValue = [];

    for(const movie of movies) {
        total += movie.rating;
    }

    average = (total / movies.length);

    const bestFilms = movies.filter((m) => m.rating >= average);
    const best = bestFilms.sort(sortMovies).reverse();

    for(const b of best) {
        returnValue.push({title: b.title, description: b.description})
    }
    

    return returnValue;
    
}

showContent(15, getBestRatedFilms());