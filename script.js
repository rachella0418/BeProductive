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

var slider = document.querySelector(".slider input");
var progressBar = document.querySelector(".slider progress");
var rain = document.getElementById("rain");
var wavesSlider = document.querySelector(".waves-slider input");
var wavesProgressBar = document.querySelector(".waves-slider progress");
var waves = document.getElementById("waves");
var citySlider = document.querySelector(".city-slider input");
var cityProgressBar = document.querySelector(".city-slider progress");
var city = document.getElementById("city");
var lofiSlider = document.querySelector(".lofi-slider input");
var lofiProgressBar = document.querySelector(".lofi-slider progress");
var lofi = document.getElementById("lofi");

rain.play();
waves.play();
city.play();
lofi.play();
waves.loop = true;
rain.loop = true;
city.loop = true;
lofi.loop = true;

slider.oninput = function() {
    progressBar.value = slider.value;
}
wavesSlider.oninput = function() {
    wavesProgressBar.value = wavesSlider.value;
}
citySlider.oninput = function() {
    cityProgressBar.value = citySlider.value;
}
lofiSlider.oninput = function() {
    lofiProgressBar.value = lofiSlider.value;
}

slider.addEventListener("mousemove", rain.volume = slider.value / 100);
wavesSlider.addEventListener("mousemove", waves.volum = wavesSlider.value / 100);
citySlider.addEventListener("mousemove", city.volume = citySlider.value / 100);
lofiSlider.addEventListener("mousemove", lofi.volume = lofiSlider.value / 100);

/*function setVolume() {
    rain.volume = slider.value / 100;
    waves.volume = wavesSlider.value / 100;
    city.volume = citySlider.value / 100;
    lofi.volume = lofiSlider.value / 100;
}*/



