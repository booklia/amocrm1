const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
    let interval = null;
    return (sec) => {
		if (interval) {
			clearInterval(interval);
		}
        let time = sec;
        let hours = Math.floor(time / 3600);
        let minutes = Math.floor((time % 3600) / 60);
        let seconds = Math.floor((time % 3600) % 60);
        
        timerEl.textContent = `${
			(hours < 10 ? "0" : "") + hours}:${
            (minutes < 10 ? "0" : "") + minutes
        }:${(seconds < 10 ? "0" : "") + seconds
		}`;
        if (seconds <= 0) {
            console.log('here')
            if (minutes != 0) {
                minutes--;
                seconds = 60;
            } else if (minutes == 0 && hours != 0) {
                hours--;
                minutes = 59;
                seconds = 60;
            }
        }
        if (time !== 0) {
            interval = setInterval(() => {
                seconds--;
                time--;
                timerEl.textContent = `${
                    (hours < 10 ? "0" : "") + hours}:${
                        (minutes < 10 ? "0" : "") + minutes
                    }:${(seconds < 10 ? "0" : "") + seconds
                }`;
                console.log(seconds)
                if (seconds <= 0) {
                    console.log('here')
                    if (minutes != 0) {
                        minutes--;
                        seconds = 60;
                    } else if (minutes == 0 && hours != 0) {
                        hours--;
                        minutes = 59;
                        seconds = 60;
                    }
                }
                if (time == 0) {
                    clearInterval(interval);
                }
            }, 1000);
        }
        
    };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
    inputEl.value = inputEl.value.replace(/\D/g, "");
});

buttonEl.addEventListener("click", () => {
    const seconds = Number(inputEl.value);

    animateTimer(seconds);
    inputEl.value = "";
});