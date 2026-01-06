let inputBox = document.getElementById("inputBox");
let selectPriority = document.getElementById("selectPriority");
let addBtn = document.getElementById("addBtn");
let selectfilter = document.getElementById("selectfilter");
let sortBtn = document.getElementById("sortBtn");
let container = document.getElementById("container");

let taskArray = [];

addBtn.addEventListener("click", function () {
    let taskName = inputBox.value;
    let priority = selectPriority.value;

    if (taskName === "") {
        alert("Please enter a task!");
        return;
    }
    if (priority === "") {
        alert("Please select priority!");
        return;
    }

    let task = {
        name: taskName,
        priority: priority,
        status: "Pending"
    };

    taskArray.push(task);
    inputBox.value = "";
    renderTasks(taskArray);
});

function renderTasks(tasks) {
    container.innerText = "";

    tasks.forEach(function (task) {
        let taskDiv = document.createElement("div");
        taskDiv.innerText = `${task.name}, ${task.priority}, ${task.status} `;

        let statusBtn = document.createElement("button");
        statusBtn.innerText = task.status;
        statusBtn.addEventListener("click", function () {
            if (task.status === "Pending") {
                task.status = "Completed";
            } else {
                task.status = "Pending";
            }
            renderTasks(taskArray);
        });

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener("click", function () {
            taskArray = taskArray.filter(function (arr) {
                return arr !== task;
            });
            renderTasks(taskArray);
        });

        taskDiv.appendChild(statusBtn);
        taskDiv.appendChild(deleteBtn);
        container.appendChild(taskDiv);
    });
}

selectfilter.addEventListener("change", function () {
    let filter = selectfilter.value;
    let filteredTasks = [];

    taskArray.forEach(function (task) {
        if (filter === "All") {
            filteredTasks.push(task);
        } else if (task.status === filter) {
            filteredTasks.push(task);
        }
    });

    renderTasks(filteredTasks);
});

sortBtn.addEventListener("click", function () {
    let priorityRank = { High: 3, Medium: 2, Low: 1 };

    let shortArray = taskArray.sort(function (a, b) {
        return priorityRank[b.priority] - priorityRank[a.priority];
    });

    renderTasks(shortArray);
});
