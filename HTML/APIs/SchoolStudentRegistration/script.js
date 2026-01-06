let name = document.getElementById("name")
let age = document.getElementById("age")
let grade = document.getElementById("grade")
let subjectsCheckBox = document.getElementsByClassName("subjects")
let scholarship = document.getElementById("scholarship")
let submitBtn = document.getElementById("submitBtn")
let confirmationMessage = document.getElementById("confirmationMessage")
let errorMessage = document.getElementById("errorMessage")

submitBtn.addEventListener("click", function () {
    confirmationMessage.innerText = ""
    errorMessage.innerText = ""

    let studenName = name.value.trim()
    let studentAge = Number(age.value.trim())
    let studentGrade = Number(grade.value.trim())

    let subjectsAraay = []
    for (let i = 0; i < subjectsCheckBox.length; i++) {
        if (subjectsCheckBox[i].checked) {
            subjectsAraay.push(subjectsCheckBox[i].value)
        }
    }

    if (studenName === "") {
        errorMessage.innerText = "Ohho write your name...."
        return
    }

    if (studentAge <= 0) {
        errorMessage.innerText = "Ohho write your age...."
        return
    }

    if (studentGrade <= 0) {
        errorMessage.innerText = "Ohho write your grade...."
        return
    }

    if (subjectsAraay.length === 0) {
        errorMessage.innerText = "Ohho select at least one subject...."
        return
    }

    let studentObj = {
        name: studenName,
        age: studentAge,
        grade: studentGrade,
        favoriteSubjects: subjectsAraay,
        hasScholarship: scholarship.checked
    }

    let object = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(studentObj)
    }

    fetch("https://httpbin.org/post", object)

        .then(function (response) {
            if (!response.ok) {
                throw new Error("Could not save student");
            }
            return response.json();
        })
        .then(function (data) {
            displayStudentData(data.json)
        })
        .catch(function (error) {
            confirmationMessage.innerText = ""
            errorMessage.innerText = "Something went wrong...."
        });

    function displayStudentData(data) {
        confirmationMessage.innerText = `
        Student Name: ${data.name}
        Student Age: ${data.age}
        Student Grade: ${data.grade}
        Favorite Subjects: ${data.favoriteSubjects}
        Has Scholarship: ${data.hasScholarship ? "Yes" : "No"}
        `
    }
})
