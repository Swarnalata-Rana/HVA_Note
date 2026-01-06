
const registerForm = document.getElementById("registerForm");

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const confirmPasswordInput = document.getElementById("confirmPasswordInput");

const nameMsg = document.getElementById('nameMsg');
const emailMsg = document.getElementById('emailMsg');
const passwordMsg = document.getElementById('passwordMsg');
const confirmMsg = document.getElementById('confirmMsg');

const summarySection = document.getElementById("summarySection");

nameInput.addEventListener("blur", function () {
    const nameValue = nameInput.value.trim();
    if (nameValue === "") {
        nameMsg.innerText = "Name is required";
    } else {
        nameMsg.innerText = "";
    }
});

emailInput.addEventListener("blur", function () {
    const emailValue = emailInput.value.trim();
    if (emailValue === "") {
        emailMsg.innerText = "Email is required";
    } else if (!emailValue.includes("@")) {
        emailMsg.innerText = "Email must include @";
    } else {
        emailMsg.innerText = "";
    }
});

passwordInput.addEventListener("blur", function () {
    const passwordValue = passwordInput.value.trim();
    if (passwordValue === "") {
        passwordMsg.innerText = "Password is required";
    } else {
        passwordMsg.innerText = "";
    }
});

confirmPasswordInput.addEventListener("blur", function () {
    const confirmValue = confirmPasswordInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    if (confirmValue === "") {
        confirmMsg.innerText = "Confirm Password is required";
    } else if (passwordValue !== confirmValue) {
        confirmMsg.innerText = "Passwords do not match";
    } else {
        confirmMsg.innerText = "";
    }
});

registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;

    if (nameInput.value.trim() === "") {
        nameMsg.innerText = "Name is required";
        valid = false;
    } else {
        nameMsg.innerText = "";
    }

    if (emailInput.value.trim() === "") {
        emailMsg.innerText = "Email is required";
        valid = false;
    } else if (!emailInput.value.trim().includes("@")) {
        emailMsg.innerText = "Email must include @";
        valid = false;
    } else {
        emailMsg.innerText = "";
    }

    if (passwordInput.value.trim() === "") {
        passwordMsg.innerText = "Password is required";
        valid = false;
    } else {
        passwordMsg.innerText = "";
    }

    if (confirmPasswordInput.value.trim() === "") {
        confirmMsg.innerText = "Confirm Password is required";
        valid = false;
    } else if (passwordInput.value.trim() !== confirmPasswordInput.value.trim()) {
        confirmMsg.innerText = "Passwords do not match";
        valid = false;
    } else {
        confirmMsg.innerText = "";
    }

    if (!valid) {
        return;
    }

    summarySection.innerHTML = `
<h3>Submitted Details</h3>
<p>Name: ${nameInput.value.trim()}</p>
<p>Email: ${emailInput.value.trim()}</p>
`;
});