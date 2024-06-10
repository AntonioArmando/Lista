function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("A tarefa não pode estar vazia!");
        return;
    }

    if (taskInput.value.length > 50) {
        alert("A tarefa não pode ter mais de 50 caracteres!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskInput.value;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remover";
    removeButton.classList.add("remove");
    removeButton.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(removeButton);
    taskList.appendChild(li);

    taskInput.value = "";
}

function removeTask(button) {
    const li = button.parentElement;
    li.parentElement.removeChild(li);
}