function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") return;

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = task;

    // Mark as complete
    span.onclick = function () {
        span.classList.toggle("completed");
    };

    let btn = document.createElement("button");
    btn.innerText = "❌";
    btn.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(btn);

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}