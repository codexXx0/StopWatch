
// StopWatch -----------------------

let stopwatch = document.getElementsByClassName("Stopwatch")
let hours = document.getElementsByClassName("hours")
let minutes = document.getElementsByClassName("minutes")
let seconds = document.getElementsByClassName("seconds")
let milSeconds = document.getElementsByClassName("milliseconds")
let btnS = document.getElementsByClassName("buttons")
let startBtn = document.getElementById("start")
let stopBtn = document.getElementById("stop")
let resetBtn = document.getElementById("reset")
let isPaused = false

startBtn.onclick = function () {
    
    
            let startFunc = setInterval(start , 10 )
            function start() {
                let millisecondsText = document.getElementById("ms").textContent
                let secondsText = document.getElementById("s").textContent
                let minutesText = document.getElementById("m").textContent
                let hoursText = document.getElementById("h").textContent
                let hideP = document.querySelectorAll("#hide")
            
                if ( millisecondsText == 99) {
                    document.getElementById("ms").textContent = 0
                    document.getElementById("s").textContent++
                    if ( secondsText == 59) {
                        document.getElementById("s").textContent = 0
                        document.getElementById("m").textContent++
                        if (minutesText == 59 ) {
                            document.getElementById("m").textContent = 0
                            document.getElementById("h").textContent++
                            if (hoursText == 23) {
                                document.getElementById("h").textContent = 0
                            }
                        }
                    }
                } else {
                    document.getElementById("ms").textContent++
                }  

                if (document.getElementById("h").textContent == 0) {
                    document.getElementById("h").textContent = 0
                }
                if (document.getElementById("m").textContent == 0) {
                    document.getElementById("m").textContent = 0
                }
                if (document.getElementById("s").textContent == 0) {
                    document.getElementById("s").textContent = 0
                }
                if (document.getElementById("ms").textContent == 0) {
                    document.getElementById("ms").textContent = 0
                }
            
                if ( document.getElementById("h").textContent < 10  ) {
                    hideP[0].classList.remove("hide")
                } else {
                    hideP[0].classList.add("hide")
                }
                if ( document.getElementById("m").textContent < 10 ) {
                    hideP[1].classList.remove("hide")
                } else {
                    hideP[1].classList.add("hide")
                }
                if ( document.getElementById("s").textContent < 10 ) {
                    hideP[2].classList.remove("hide")
                } else {
                    hideP[2].classList.add("hide")
                }   
                if ( document.getElementById("ms").textContent < 10 ) {
                    hideP[3].classList.remove("hide")
                } else {
                    hideP[3].classList.add("hide")
                }   
            }

    stopBtn.onclick = function () {
        isPaused = true
        clearInterval(startFunc)
    }

    resetBtn.onclick = function () {
        clearInterval(startFunc)
        document.getElementById("h").textContent = "0"
        document.getElementById("m").textContent = "0"
        document.getElementById("s").textContent = "0"
        document.getElementById("ms").textContent = '0'
    }
}


// Watch ------------------------------

setInterval(() => {
    let now = new Date();
    let hoursW = now.getHours();
    let minutesW = now.getMinutes();
    let secondsW = now.getSeconds();
    let hoursWatch = document.getElementById("hW");
    let minutesWatch = document.getElementById("mW");

    hoursWatch.textContent = 12 - hoursW ;
    minutesWatch.textContent = minutesW;

}, 50)
