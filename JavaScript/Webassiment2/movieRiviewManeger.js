class Movie {
    constructor(title, genre, ratings) {
        this.title = title;
        this.genre = genre;
        this.ratings = ratings
    }

    getAverageRating() {
        let s = 0
        for (let i = 0; i < this.ratings.length; i++) {
            s += this.ratings[i]
        }
        return s / this.ratings.length
    }

}

function addMovie(movieList, movie) {
    movieList.push(movie);
}

function filterByGenre(movieList, genre) {
    movieList.forEach(arr => {
        if (arr.genre === genre) {
            console.log(arr.title)
        }
    })
}

function topRated(movieList) {

    let topMovie = movieList[0]

    movieList.forEach(arr => {

        if (arr.getAverageRating() > topMovie.getAverageRating()) {
            topMovie = arr
        }
    })
    console.log("Top rated movie:", topMovie.title);
    return topMovie;
}


let movies = [];

addMovie(movies, new Movie("Inception", "Sci-Fi", [5, 4, 5, 5]))

addMovie(movies, new Movie("The Notebook", "Romance", [4, 4, 3, 4]))

addMovie(movies, new Movie("Interstellar", "Sci-Fi", [5, 5, 5, 4]))
console.log(movies);

filterByGenre(movies, "Sci-Fi")
topRated(movies)