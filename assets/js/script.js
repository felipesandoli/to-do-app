let tasks = [];

// Event Listener for the DOM to be loaded, as done in Love Maths walkthrough project
document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("new-task");
    button.addEventListener("click", displayTaskTemplate);
})

function displayTaskTemplate() {
    let taskTemplate = document.createElement("div");
    taskTemplate.innerHTML = `
        <input type="text" required></input>
        <button id="create-confirm">Create</button>
    `;
    taskTemplate.classList.add("taskTemplate");
    let toDo = document.getElementById("to-do");
    toDo.appendChild(taskTemplate);

    let button = document.getElementById("create-confirm");
    button.addEventListener("click", createNewTask);
}

function createNewTask() {
    let taskTemplate = document.getElementsByClassName("taskTemplate")[0];
    let task = taskTemplate.children[0].value;
    tasks.push({
        content : task
    });
    taskTemplate.remove();
    displayTasks();
}

function displayTasks() {

}

function setTaskInProgress() {

}

function setTaskComplete() {

}