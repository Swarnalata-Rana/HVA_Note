let nameInputBox = document.getElementById("nameInputBox")
let yearInputBox = document.getElementById("yearInputBox")
let addBtn = document.getElementById("addBtn")
let displayArea = document.getElementById("displayArea")

let array = []

addBtn.addEventListener("click", function () {
    let getNameValue = nameInputBox.value.trim()
    let getYearValue = yearInputBox.value.trim()

    if (getNameValue === "" || getYearValue === "") {
        alert("Please fill all details");
        return;
    }

    nameInputBox.value = ""
    yearInputBox.value = ""

    let obj = {
        Name: getNameValue,
        Year: getYearValue,
        Votes: 0
    }

    array.push(obj)
    displayMovie()
})

function displayMovie() {
    displayArea.innerHTML = ""

    array.sort(function (a, b) {
        return b.Votes - a.Votes
    })

    array.forEach(function (movie) {
        let div = document.createElement("div")

        let p = document.createElement("p")
        p.innerText = `${movie.Name} | ${movie.Year} | ${movie.Votes}`

        let upBtn = document.createElement("button");
        upBtn.innerText = "Vote Up";
        upBtn.addEventListener("click", function () {
            movie.Votes++;
            displayMovie();
        });

        let downBtn = document.createElement("button");
        downBtn.innerText = "Vote Down";
        downBtn.addEventListener("click", function () {
            movie.Votes--;
            displayMovie();
        });

        div.appendChild(p)
        div.appendChild(upBtn)
        div.appendChild(downBtn)
        displayArea.appendChild(div)

    })
}
