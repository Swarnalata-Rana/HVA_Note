let startBtn = document.getElementById("startBtn")
let msgArea = document.getElementById("msgArea")


function uploadingFile(msg, time) {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            let random = Math.random()
            if (random < 0.3) {
                reject("Upload failed! Please try again.")
            } else {
                resolve(msg)
                msgArea.innerText = msg
                msgArea.style.color = "black"

            }
        }, time)
    })
    return promise
}


function processingFile(msg, time) {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            let random = Math.random()
            if (random < 0.3) {
                reject("Upload failed! Please try again.")
            } else {
                resolve(msg)
                msgArea.innerText = msg
                msgArea.style.color = "black"
            }
        }, time)
    })
    return promise
}


function savingFile(msg, time) {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            let random = Math.random()
            if (random < 0.3) {
                reject("Upload failed! Please try again.")
            } else {
                resolve(msg)
                msgArea.innerText = msg
                msgArea.style.color = "black"
            }
        }, time)
    })
    return promise
}


startBtn.addEventListener("click", function () {
    startBtn.disabled = true
    showMessage()
})

async function showMessage() {
    try {

        let msg = await uploadingFile("Uploading file…", 3000)
        console.log(msg)

        let msg1 = await processingFile("Processing file…", 2000)
        console.log(msg1)

        let msg2 = await savingFile("Saving result…", 2000)
        console.log(msg2)

        msgArea.innerText = "Upload successful!"
        msgArea.style.color = "green"

    }
    catch (error) {
        msgArea.innerText = "Upload failed! Please try again."
        msgArea.style.color = "red"
    }
    startBtn.disabled = false

}


