import { CANVAS_WIDTH, CANVAS_HEIGHT, SIZE_UNIT, ctx } from './index';

//  Position des Spielers
var vPlayerPos = [0];

var upPressed = false;
var downPressed = false;

document.addEventListener('keyup', function(event) {
	switch (event.code) {
		case 'ArrowUp': {
			upPressed = false;
			break;
		}
		case 'ArrowDown': {
			downPressed = false;
			break;
		}
	}
});

document.addEventListener('keydown', function(event) {
	switch (event.code) {
		case 'ArrowUp': {
			upPressed = true;
			break;
		}
		case 'ArrowDown': {
			downPressed = true;
			break;
		}
	}
});

export function DrawPlayer() {
	if (upPressed) {
		setRelPlayerPos(-1);
	} else if (downPressed) {
		setRelPlayerPos(1);
	}
	ctx.fillRect(0, vPlayerPos[0], SIZE_UNIT, SIZE_UNIT);
}

// Relative Playerpostition
export function setRelPlayerPos(iYPos) {
	let newPosition = [vPlayerPos[0] + iYPos * SIZE_UNIT];
	//out of bounds check
	if (newPosition[0] > CANVAS_HEIGHT - SIZE_UNIT) {
		console.log(`size to high ${vPlayerPos[0]}`);
		return;
	} else if (newPosition[0] < 0) {
		console.log(`size to low ${vPlayerPos[0]}`);
		return;
	}
	vPlayerPos = newPosition;
}

export function getPlayerPos() {
	return vPlayerPos;
}
