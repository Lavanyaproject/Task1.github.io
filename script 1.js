let taskList = document.getElementById('task-list');
let taskInput = document.getElementById('task-input');
let addTaskBtn = document.getElementById('add-task-btn');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    let task = taskInput.value.trim();
    if (task !== '') {
        let taskListItem = document.createElement('li');
        taskListItem.textContent = task;
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', deleteTask);
        taskListItem.appendChild(deleteBtn);
        taskList.appendChild(taskListItem);
        taskInput.value = '';
    }
}

function deleteTask(event) {
    let taskListItem = event.target.parentNode;
    taskList.removeChild(taskListItem);
}