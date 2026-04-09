let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    let completed = 0;

    tasks.forEach((task, index) => {
        let li = document.createElement("li");

        let text = document.createElement("div");
        text.innerHTML = `
            <span class="${task.done ? 'completed' : ''}">
                ${task.name}
            </span><br>
            <span class="date">${task.date || ""}</span>
        `;

        text.onclick = () => {
            tasks[index].done = !tasks[index].done;
            saveTasks();
            renderTasks();
        };

        let btn = document.createElement("button");
        btn.innerText = "❌";
        btn.onclick = () => {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        };

        if (task.done) completed++;

        li.appendChild(text);
        li.appendChild(btn);
        list.appendChild(li);
    });

    updateProgress(completed);
}

function updateProgress(completed) {
    let total = tasks.length;
    let percent = total ? (completed / total) * 100 : 0;
    document.getElementById("progressBar").style.width = percent + "%";
}

function addTask() {
    let name = document.getElementById("taskInput").value;
    let date = document.getElementById("dateInput").value;

    if (!name) return;

    tasks.push({ name, date, done: false });

    saveTasks();
    renderTasks();

    document.getElementById("taskInput").value = "";
    document.getElementById("dateInput").value = "";
}

renderTasks();