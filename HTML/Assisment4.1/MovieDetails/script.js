let inputBox = document.getElementById("inputBox")
let btn = document.getElementById("btn")
let movieSection = document.getElementById("movieSection")


btn.addEventListener("click", function () {
  movieSection.innerText = ""
  let query = inputBox.value.trim()
  inputBox.value = ""

  if (query === "") {
    alert("Write movie Title....")
    return
  }

  fetchMovie(query)
})

async function fetchMovie(query) {

  try {
    let response = await fetch(`https://omdbapi.com/?t=${query}&apikey=9ac3240b`)
    let data = await response.json()

    if (data.Response === "False") {
      movieSection.innerText = "Movie not found!";
      return;
    }

    let obj = {
      Title: data.Title,
      Year: data.Year,
      Genre: data.Genre,
      Plot: data.Plot
    }
    movieDisplay(obj)
  }
  catch (error) {
    movieSection.innerText = "There Some Error While Feching Data"
  }

}

function movieDisplay(obj) {
  movieSection.innerText = `
    Title: ${obj.Title} 
    Year:${obj.Year}
    Genre:${obj.Genre}
    Plot:${obj.Plot}`
}