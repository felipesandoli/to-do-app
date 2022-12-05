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
        <button>Create</button>
    `;
    taskTemplate.classList.add("taskTemplate");
    let toDo = document.getElementById("to-do");
    toDo.appendChild(taskTemplate);
}

function createNewTask() {
    
}

function displayTasks() {

}

function setTaskInProgress() {

}

function setTaskComplete() {

}