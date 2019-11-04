import { CANVAS_WIDTH, CANVAS_HEIGHT, SIZE_UNIT, ctx } from './index';

//  Position des Spielers
var vPlayerPos = [0, 0];
// Letzte Position des Spielers
var vLastPlayerPos = [0, 0];

document.addEventListener('keyup', function(event) {
	switch (event.code) {
		case 'ArrowUp': {
			MovePlayer(0, -1);
			break;
		}
		case 'ArrowDown': {
			MovePlayer(0, 1);
			break;
		}
		case 'ArrowLeft': {
			MovePlayer(-1, 0);
			break;
		}
		case 'ArrowRight': {
			MovePlayer(1, 0);
			break;
		}
	}
});

export function MovePlayer(iXUnit, iYUnit) {
	vPlayerPos = [
		vLastPlayerPos[0] + iXUnit * SIZE_UNIT,
		vLastPlayerPos[1] + iYUnit * SIZE_UNIT,
	];
	DrawPlayer();
}

export function DrawPlayer() {
	ctx.clearRect(vLastPlayerPos[0], vLastPlayerPos[1], SIZE_UNIT, SIZE_UNIT);
	ctx.fillRect(vPlayerPos[0], vPlayerPos[1], SIZE_UNIT, SIZE_UNIT);

	vLastPlayerPos = [vPlayerPos[0], vPlayerPos[1]];
}

export function setPlayerPos(iXPos, iYPos) {
	vPlayerPos = [
		vLastPlayerPos[0] + iXUnit * SIZE_UNIT,
		vLastPlayerPos[1] + iYUnit * SIZE_UNIT,
	];
	DrawPlayer();
}
