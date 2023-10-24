/* 
EJERCICIO 13:
Agrupa en un array las peliculas por categorias:
[
    {
        Drama: {
            {
                title: "Fight Club",
                director: "David Fincher",
                actors: "Brad Pitt, Edward Norton, Helena Bonham Carter",
                year: 1999,
                description:
                "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
                category: "Drama",
                rating: 8.8,
            },
            Action: {
                ...
            },
            ...
        }
    }
]
*/

function getMoviesByCategory(category){
    var mv = [];
    for(const movie of movies) {
        if(movie.category === category){
            mv.push(movie);
        }
    }

    return mv;
}

function genCategories() {
    var returnValue = [];
    for(const catKey of Object.keys(categories)) {
        const category = categories[catKey];
        const mvs = getMoviesByCategory(category);
        returnValue.push({category: category, movies: mvs});
    }

    return returnValue;
}
  
showContent(13, genCategories());