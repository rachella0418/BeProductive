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

