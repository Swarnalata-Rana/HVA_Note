let inputBox = document.getElementById("inputBox")
let searchBtn = document.getElementById("searchBtn")
let movieDetails = document.getElementById("movieDetails")
let titleTag = document.getElementById("titleTag")
let yearTag = document.getElementById("yearTag")
let typeTag = document.getElementById("typeTag")
let ratingTag = document.getElementById("ratingTag")
let posterTag = document.getElementById("posterTag")
let plotTag = document.getElementById("plotTag")
let errorTag = document.getElementById("errorTag")

searchBtn.addEventListener("click", function () {
    let query = inputBox.value.trim()
    inputBox.value = ""

    movieDetails.style.display = "none";
    errorTag.innerText = "";

    titleTag.innerText = "";
    yearTag.innerText = "";
    typeTag.innerText = "";
    ratingTag.innerText = "";
    plotTag.innerText = "";
    posterTag.src = "";

    if (query === "") {
        alert("Please enter a movie or series name.")
        return
    }
    fetchData(query)

})

async function fetchData(query) {
    try {
        let response = await fetch(`https://omdbapi.com/?t=${query}&apikey=9ac3240b`)
        let data = await response.json()

        if (data.Response === "True") {
            movieDisplay(data)
            movieDetails.style.display = "block"

        }
        else {
            errorTag.innerText = "Movie or series not found.";
        }
    }
    catch (error) {
        console.log(error);
        errorTag.innerText = "Error fetching data.";
    }

}

function movieDisplay(movie) {
    titleTag.innerText = `Title: ${movie.Title}`
    yearTag.innerText = `Year: ${movie.Year}`
    typeTag.innerText = `Movie Type: ${movie.Type}`
    ratingTag.innerText = `IMDb Rating: ${movie.imdbRating}`;
    plotTag.innerText = `Plot: ${movie.Plot}`

    if (movie.Poster !== "N/A") {
        posterTag.src = movie.Poster
    } else {
        posterTag.src = ""
        errorTag.innerText = "No poster available"
    }

}