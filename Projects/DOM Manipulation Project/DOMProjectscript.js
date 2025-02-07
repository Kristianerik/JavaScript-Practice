let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById('taskList');

function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText === '') return;

    let taskItem = document.createElement("li");
    taskItem.classList.add("task");

    let taskSpan = document.createElement("span")
    taskSpan.innerText = taskText;

    let completeBtn = document.createElement("button");
    completeBtn.innerText = "Complete";
    completeBtn.addEventListener("click", function() {
        taskSpan.classList.toggle("completed");
    });

    let removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    removeBtn.addEventListener("click", function() {
        taskList.removeChild(taskItem)
    });

    taskItem.appendChild(taskSpan);
    taskItem.appendChild(completeBtn);
    taskItem.appendChild(removeBtn);

    taskList.appendChild(taskItem);

    taskInput.value = "";
}

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keyup", function (e) {
    if (e.key === "Enter") addTask();
});