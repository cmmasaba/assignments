document.addEventListener("DOMContentLoaded", function () {
    let submission = document.getElementById("submit");
    let new_task = document.getElementById("task");
    let tasks_list = document.getElementById("tasks_list");

    submission.disabled = true;

    new_task.addEventListener("input", function () {
        submission.disabled = !new_task.value.trim();
    });

    document.getElementById("task-form").addEventListener("submit", function () {
        let new_tasks_value = new_task.value.trim();

        if (new_tasks_value !== "") {
            let tasks_list_item = document.createElement("li");
            tasks_list_item.textContent = new_tasks_value;

            tasks_list.appendChild(tasks_list_item);

            new_task.value = "";

            submission.disabled = true;
        }

        return false;
    });
});