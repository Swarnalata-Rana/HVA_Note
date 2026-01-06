let inputBox = document.getElementById("inputBox")
let btn = document.getElementById("btn")
let resultArea = document.getElementById("resultArea")

let resultArray = []

btn.addEventListener("click", function () {
    let query = inputBox.value.trim()
    inputBox.value = ""

    if (query === "") {
        alert("Please write a movie title")
        return
    }

    fetchData(query)
})

function fetchData(query) {
    fetch(`https://omdbapi.com/?s=${query}&apikey=9ac3240b`)

        .then(function (response) {
            return response.json()
        })
        .then(function (data) {

            if (data.Response === "False") {
                resultArea.innerText = "Oops Sorry There No Data Available Accoding To Your Query.."
                return
            }

            resultArray = data.Search
            displayMovie(resultArray)

        })
        .catch(function (error) {
            console.log(error)
            resultArea.innerText = "There Some Error While Feching Data"
        })
}

function displayMovie(movieList) {

    resultArea.innerHTML = ""
    movieList.forEach(function (movie) {
        let pTag = document.createElement("p")
        pTag.innerText = `Movie title: ${movie.Title} | Release year: ${movie.Year} | Movie type: ${movie.Type}`
        resultArea.appendChild(pTag)
    })
}