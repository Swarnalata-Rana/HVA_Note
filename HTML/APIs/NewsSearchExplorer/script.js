let inputBox = document.getElementById("inputBox")
let searchBtn = document.getElementById("searchBtn")
let newsGrid = document.getElementById("newsGrid")
let errorArea = document.getElementById("errorArea")
let newsCards = document.getElementsByClassName("newsCards")


newsGrid.style.display = "none"
searchBtn.addEventListener("click", function () {
    let query = inputBox.value.trim()
    inputBox.value = ""
    errorArea.innerText = ""

    if (query === "") {
        errorArea.innerText = "Please enter a search keyword."
        return
    }
    fetchNewArticle(query)

})

async function fetchNewArticle(query) {
    try {
        let response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=2b0e21180fad40299cb93b4e3778d9cb`)
        let data = await response.json()

        if (data.articles.length === 0) {
            errorArea.innerText = "No news found for that keyword."
            newsGrid.style.display = "none"
            return
        }

        errorArea.innerText = ""
        newsGrid.style.display = "flex"
        articleDisplay(data.articles)
    }
    catch (error) {
        errorArea.innerText = "No news found for that keyword."
        newsGrid.style.display = "none"

    }
}

function articleDisplay(articlesData) {
    for (let i = 0; i < newsCards.length; i++) {
        newsCards[i].innerHTML = ""

        if (articlesData[i]) {
            if (articlesData[i].urlToImage) {
                let img = document.createElement("img")
                img.src = articlesData[i].urlToImage
                img.style.width = "100%"
                img.style.height = "100px"
                newsCards[i].appendChild(img)
            }
            else {
                let p = document.createElement("p")
                p.innerText = "No image available"
                newsCards[i].appendChild(p)
            }

            let title = document.createElement("h4")
            title.innerText = `Title: ${articlesData[i].title}`
            newsCards[i].appendChild(title)

            let sourceName = document.createElement("p")
            sourceName.innerText = `Name: ${articlesData[i].source.name}`
            newsCards[i].appendChild(sourceName)

            let description = document.createElement("p")
            description.innerText = `Discription: ${articlesData[i].description}`
            newsCards[i].appendChild(description)

        }

    }

}

