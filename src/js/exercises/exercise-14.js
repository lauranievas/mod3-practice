/* 
EJERCICIO 14:
Muestra un array que solo incluya la pelicula mejor valorada de cada uno de estos actores:
- Leonardo Dicaprio
- Robert De Niro
- Tom Hanks
*/

function getActorFilms(actor) {
    var actorMovies = [];

    for (const movie of movies) {
        if (movie.actors.indexOf(actor) > -1) {
            actorMovies.push(movie);
        }
    }

    return actorMovies;
}

function mostValorated(films){
    var score = 0;
    var current = undefined;

    for(const movie of films) {
        if(movie.rating > score) {
            current = movie;
            score = movie.rating;
        }
    }

    return current;
}

function getActorsBestFilm(factors) {
    returnValue = "";

    for(const factor of factors) {
        const mv = mostValorated(getActorFilms(factor));
        console.log(mv)
        returnValue += `<div>${factor} - ${mv.title}</div>`
    }

    return returnValue;
}


showContent(14, getActorsBestFilm(["Leonardo DiCaprio", "Robert De Niro", "Tom Hanks"]));