let dis = document.getElementById('dis')


let isRunning = false;
let timer = null;
let startTime = 0
let eclipseTime = 0
function starts() {
    if (!isRunning) {
        startTime = Date.now() - eclipseTime
        timer = setInterval(updates, 10)
        isRunning = true
    }
}
function stops() {
    if (isRunning) {
        clearInterval(timer)
        eclipseTime = Date.now() - startTime
        isRunning = false
    }
}

function resets() {
    clearInterval(timer)
    isRunning = false;

    startTime = 0
    eclipseTime = 0
    dis.textContent = '00:00:00:00'
}
function updates() {
    const currentTime = Date.now()
    eclipseTime = currentTime - startTime;
    let hour = Math.floor(eclipseTime / (1000 * 60 * 60))
    let min = Math.floor(eclipseTime / (1000 * 60) % 60)
    let sec = Math.floor(eclipseTime / 1000 % 60)
    let milli = Math.floor(eclipseTime % 1000 / 10)
    hour = String(hour).padStart(2, '0')
    min = String(min).padStart(2, '0')
    sec = String(sec).padStart(2, '0')
    milli = String(milli).padStart(2, '0')
    dis.textContent = `${hour}:${min}:${sec}:${milli}`
}