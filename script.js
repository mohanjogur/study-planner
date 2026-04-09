function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") return;

    let li = document.createElement("li");
    li.innerHTML = task + " <button onclick='removeTask(this)'>❌</button>";

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

function removeTask(btn) {
    btn.parentElement.remove();
}