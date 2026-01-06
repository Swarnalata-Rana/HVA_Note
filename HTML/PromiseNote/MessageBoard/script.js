let btn = document.getElementById("btn")
let myArea = document.getElementById("masArea")

btn.addEventListener("click", function () {
    btn.disabled = true;
    myArea.innerText = "Loading message...";
    myArea.style.color = "black"
    let myProsime = new Promise((resolve, reject) => {
        setTimeout(function () {
            let random = Math.random()
            if (random > 0.5) {
                resolve("Message loaded successfully!")
            }
            else {
                reject("Something went wrong!")
            }
        }, 2000)
    })

    myProsime
        .then((result) => {
            myArea.innerText = result
            myArea.style.color = "green"
            btn.disabled = false;

        })
        .catch((error) => {
            myArea.innerText = error
            myArea.style.color = "red"
            btn.disabled = false;
        })

})