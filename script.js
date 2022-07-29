function realtimeClock() {
    var rtClock = new Date();
    var hour = rtClock.getHours();
    var minute = rtClock.getMinutes();
    var second = rtClock.getSeconds();

    var ampm = (hour < 12) ? "AM" : "PM";

    hour = (hour > 12) ? hour - 12 : hour;
    hour = ("0" + hour).slice(-2);
    minute = ("0" + minute).slice(-2);
    second = ("0" + second).slice(-2);
    document.getElementById('clock').innerHTML =
        hour + " : " + minute + " : " 
        + second + " " + ampm;
    var t = setTimeout(realtimeClock, 500);
}

const taskList = document.querySelector(".task-list");
const addBtn = document.querySelector(".addBtn");
addBtn.addEventListener("click", addTask);

function addTask(event) {
    event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const checkBtn = document.createElement('button');
    checkBtn.innerHTML = '<i class="fa-regular fa-square"></i>'
    checkBtn.classList.add("checkBtn");
    todoDiv.appendChild(checkBtn);
    checkBtn.addEventListener("click", changeBtn);

    function changeBtn(event) {
        if (checkBtn.innerHTML == '<i class="fa-regular fa-square"></i>') {
            checkBtn.innerHTML = '<i class="fa-regular fa-square-check"></i>';
        } else {
            checkBtn.innerHTML = '<i class="fa-regular fa-square"></i>';
        }
    }

    const newTask = document.createElement('input');
    newTask.innerHTML = "new task";
    newTask.classList.add('todo-item');
    todoDiv.appendChild(newTask);

    taskList.appendChild(todoDiv);
}

const song = document.getElementById("music");
function e(event) {
    song.play();
}