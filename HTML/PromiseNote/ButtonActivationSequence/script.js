let oneBtn = document.getElementById("oneBtn")
let twoBtn = document.getElementById("twoBtn")
let threeBtn = document.getElementById("threeBtn")
let pTag = document.getElementById("pTag")

oneBtn.disabled = false;
twoBtn.disabled = true;
threeBtn.disabled = true;

oneBtn.addEventListener("click", function () {
    oneBtn.disabled = true;
    let promise = new Promise(function (resolve) {

        setTimeout(function () {
            resolve()
        }, 1000)

    })
    promise
        .then(function () {
            twoBtn.disabled = false;

        })

})

twoBtn.addEventListener("click", function () {
    twoBtn.disabled = true;

    let promise = new Promise(function (resolve) {
        setTimeout(function () {
            resolve()
        }, 1000)

    })
    promise
        .then(function () {
            threeBtn.disabled = false;

        })
})

threeBtn.addEventListener("click", function () {
    threeBtn.disabled = true;
    pTag.innerText = "All steps completed! Thank you."
})

