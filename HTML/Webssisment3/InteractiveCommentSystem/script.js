const commentInput = document.getElementById("commentInput");
const postBtn = document.getElementById("postBtn");
const errorMsg = document.getElementById("errorMsg");
const commentCount = document.getElementById("commentCount");
const commentList = document.getElementById("commentList");

function updateCount() {
    commentCount.innerText = `Total Comments: ${commentList.children.length}`;
}

postBtn.addEventListener("click", function () {
    const text = commentInput.value.trim();

    if (text === "") {
        errorMsg.innerText = "Comment cannot be empty";
        return;
    }
    if (text.length < 5) {
        errorMsg.innerText = "Comment must be at least 5 characters";
        return;
    }
    if (text.length > 200) {
        errorMsg.innerText = "Comment cannot be more than 200 characters";
        return;
    }

    errorMsg.innerText = "";

    const block = document.createElement("div");
    const pTag = document.createElement("p");
    pTag.innerText = text;

    const dltBtn = document.createElement("button");
    dltBtn.innerText = "Delete";

    block.appendChild(pTag);
    block.appendChild(dltBtn);
    commentList.appendChild(block);

    commentInput.value = "";
    updateCount();

    dltBtn.addEventListener("click", function () {
        block.remove();
        updateCount();
    });
});
updateCount();