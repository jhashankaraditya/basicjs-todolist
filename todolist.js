addtask = document.getElementById("add-task");
addtask.addEventListener("click", () => {
    let todo = document.getElementById("input-task").value;
    if (todo) {
        if (localStorage.getItem("tasks") == null) {
            tasksarray = [];
            tasksarray.push(todo);
            localStorage.setItem("tasks", JSON.stringify(tasksarray));
        }
        else {
            tasksarraystr = localStorage.getItem("tasks");
            tasksarray = JSON.parse(tasksarraystr);
            tasksarray.push(todo);
            localStorage.setItem("tasks", JSON.stringify(tasksarray));
        }
        //populate the table
        tablebody = document.getElementById("tablebody");
        let taskstr = "";
        tasksarray.forEach((element, index) => {
            taskstr += `<tr>
            <td scope="row">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault${index}">
                    <label class="form-check-label" for="flexCheckDefault">
                    </label>
                </div>
            </td>
            <td>${element}</td>
            <td>
                <div data-bs-theme="dark">
                    <button type="button" class="btn-close" onclick="deleted(${index})" aria-label="Close"></button>
                </div>
            </td>
            </tr>`
        }); tablebody.innerHTML = taskstr;
    }
    else alert("Task cannot be empty");
    document.getElementById("input-task").value = "";
})

function deleted(itemindex) {
    tasksarraystr = localStorage.getItem("tasks");
    tasksarray = JSON.parse(tasksarraystr);
    tasksarray.splice(itemindex, 1);
    localStorage.setItem("tasks", JSON.stringify(tasksarray));
    if (localStorage.getItem('tasks') != null) {
        //populate the table
        tasksarraystr = localStorage.getItem("tasks");
        tasksarray = JSON.parse(tasksarraystr);
        tablebody = document.getElementById("tablebody");
        let taskstr = "";
        tasksarray.forEach((element, index) => {
            taskstr += `<tr>
            <th scope="row">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault${index}">
                    <label class="form-check-label" for="flexCheckDefault">
                    </label>
                </div>
            </th>
            <td>${element}</td>
            <td>
                <div data-bs-theme="dark">
                    <button type="button" class="btn-close" onclick="deleted(${index})" aria-label="Close"></button>
                </div>
            </td>
            </tr>`
        }); tablebody.innerHTML = taskstr;
    } else tablebody.innerHTML = ``;
}

window.onload = function () {
    if (localStorage.getItem('tasks') != null) {
        //populate the table
        tasksarraystr = localStorage.getItem("tasks");
        tasksarray = JSON.parse(tasksarraystr);
        tablebody = document.getElementById("tablebody");
        let taskstr = "";
        tasksarray.forEach((element, index) => {
            taskstr += `<tr>
            <th scope="row">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault${index}">
                    <label class="form-check-label" for="flexCheckDefault">
                    </label>
                </div>
            </th>
            <td>${element}</td>
            <td>
                <div data-bs-theme="dark">
                    <button type="button" class="btn-close" onclick="deleted(${index})" aria-label="Close"></button>
                </div>
            </td>
            </tr>`
        }); tablebody.innerHTML = taskstr;
    }
}