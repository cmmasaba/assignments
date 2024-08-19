document.addEventListener("DOMContentLoaded", function () {
    var submit_button = document.getElementById("submit");
    var new_task = document.getElementById("task");
    var tasks_list = document.getElementById("tasks");

    submit_button.disabled = true;

    new_task.addEventListener("input", function () {
        submit_button.disabled = !new_task.value.trim();
    });

    document.querySelector("form").addEventListener("submit", function () {
        var new_tasks_value = new_task.value.trim();

        if (new_tasks_value !== "") {
            var tasks_list_item = document.createElement("li");
            tasks_list_item.textContent = new_tasks_value;

            tasks_list.appendChild(tasks_list_item);

            new_task.value = "";

            submit_button.disabled = true;
        }

        return false;
    });
});