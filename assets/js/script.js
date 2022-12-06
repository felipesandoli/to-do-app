let taskList = [];

// Event Listener for the DOM to be loaded, as done in Love Maths walkthrough project
document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("new-task-btn");
    button.addEventListener("click", displayTaskTemplate);
})

/**
 *  Displays a template to be completed for creating a new task. Template contains
 *  a button to create the task after the template has been completed.
 */
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

/**
 *  Creates the task and add it to the list of tasks. Refresh the displayed tasks after addition.
 */
function createNewTask() {
    let taskTemplate = document.getElementsByClassName("taskTemplate")[0];
    let task = taskTemplate.children[0].value;
    taskList.push({
        content : task,
        status: "to do"
    });
    taskTemplate.remove();
    // Clear all tasks before displaying again, so there are no duplicate tasks
    clearAllTasks();
    displayTasks();
}

/**
 *  Iterates over list of tasks and displays them in the correct section 
 *  according to the status
 */
function displayTasks() {
    for (let taskIterator of taskList) {
        let task = document.createElement("div");
        task.innerHTML = `
            <p>${taskIterator.content}</p>
        `;
        task.classList.add("task");
        if (taskIterator.status === "to do") {
            let toDo = document.getElementById("to-do");
            toDo.appendChild(task);
        } else if (taskIterator.status === "in progress") {
            let inProgress = document.getElementById("in-progress");
            inProgress.appendChild(task);
        } else if (taskIterator.status === "completed") {
            let completed = document.getElementById("completed");
            completed.appendChild(task);
        }
    }
}

/**
 *  Clear all tasks currentky beeing displayed
 */
function clearAllTasks() {
    let taskContainers = document.getElementsByClassName("task-container");
    for (let taskContainer of taskContainers) {
        taskContainer.innerHTML = "";
    }
}

function setTaskInProgress() {

}

function setTaskComplete() {

}