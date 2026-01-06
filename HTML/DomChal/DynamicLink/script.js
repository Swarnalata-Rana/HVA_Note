let aTag = document.getElementById("aTag");

let btnFacebook = document.getElementById("btnFacebook")

let btnYouTube = document.getElementById("btnYouTube")

let btnWikipedia = document.getElementById("btnWikipedia")


function facebookLink() {
    aTag.innerText = "Facebook";
    aTag.href = "https://facebook.com";
    aTag.target = "_blank";
}

function youTubeLink() {
    aTag.innerText = "YouTube";
    aTag.href = "https://youtube.com";
    aTag.target = "_blank";
}

function wikipediaLink() {
    aTag.innerText = "Wikipedia";
    aTag.href = "https://wikipedia.org";
    aTag.target = "_blank";
}

btnFacebook.addEventListener("click",
    facebookLink
)
btnYouTube.addEventListener("click",
    youTubeLink
)
btnWikipedia.addEventListener("click",
    wikipediaLink
)