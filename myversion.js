const stopwatch = document.querySelector('.stopwatch');
const time = document.querySelector('.time');

const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const historyBtn = document.querySelector('.history');
const timeList = document.query
Selector('.time-list');

const infoBtn = document.querySelector('.fa-question');
const modalShadow = document.querySelector('.modal-shadow');
const closeBtn = document.querySelector('.close');

const brushBtn = document.querySelector('.fa-paint-brush');
const colorsMenu = document.querySelector('.colors');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');

let root = document.documentElement;
let seconds = 0;
let minutes = 0;
let countTime
let countArr = [];

const closeInfo = () => {
	modalShadow.style.display = 'none';
};

function startTime() {
	if (!countTime) {
		//check if an interval has already been set up
		countTime = setInterval(() => {
			if (seconds <= 9) {
				stopwatch.textContent = `${minutes}:0${seconds}`;
				seconds++;
			} else if (seconds > 9 && seconds <= 59) {
				stopwatch.textContent = `${minutes}:${seconds}`;
				seconds++;
			} else {
				seconds = 0;
				minutes++;
				stopwatch.textContent = `${minutes}:00`;
			}
		}, 400);
	}
}

const handleStop = () => {
	clearInterval(countTime);

	time.innerHTML = `Ostatni czas to ${stopwatch.textContent}`;

	if (stopwatch.textContent !== '0:00') {
		time.style.visibility = 'visible';
		countArr.push(stopwatch.textContent);
	}
	clearStuff();
};


const history = () => {
    timeList.textContent = '';
    let num = 1;
	countArr.forEach((time) => {
		const newLi = document.createElement('li');
		newLi.innerHTML = `Odczyt nr ${num} : ${time}`;
		timeList.append(newLi);
		num++;
	});
};

const handleReset = () => {
    time.style.visibility = 'hidden';
	countArr = [];
	clearStuff();
};

const clearStuff = () => {
    clearInterval(countTime);
    stopwatch.textContent = '0:00';
    timeList.textContent = '';
    seconds = 0;
    minutes = 0;
};

window.addEventListener('click', (e) => {
	if (e.target.classList.contains('modal-shadow')) {
		closeInfo();
	}
});

historyBtn.addEventListener('click', history);

resetBtn.addEventListener('click', handleReset);

stopBtn.addEventListener('click', handleStop);

pauseBtn.addEventListener('click', () => {
	clearInterval(countTime);
	countTime = null;
});
startBtn.addEventListener('click', startTime);
closeBtn.addEventListener('click', closeInfo);
infoBtn.addEventListener('click', () => {
	modalShadow.style.display = 'block';
});

brushBtn.addEventListener('click', () => {
	colorsMenu.classList.toggle('show-colors');
});

one.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(250, 20, 6)');
	root.style.setProperty('--second-color', 'rgb(209, 33, 24)');
});

two.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(6, 173, 250)');
	root.style.setProperty('--second-color', 'rgb(28, 145, 199)');
});

three.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(0, 255, 42)');
	root.style.setProperty('--second-color', 'rgb(28, 209, 58)');
});
