const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
const SIZE_UNIT = 16;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//  Position des Spielers
var vPlayerPos = [0, 0];
// Letzte Position des Spielers
var vLastPlayerPos = [0, 0];

document.addEventListener('keydown', function(event) {
	switch (event.code) {
		case 'ArrowUp': {
			Move(0, -1);
			break;
		}
		case 'ArrowDown': {
			Move(0, 1);
			break;
		}
		case 'ArrowLeft': {
			Move(-1, 0);
			break;
		}
		case 'ArrowRight': {
			Move(1, 0);
			break;
		}
	}
});

function Move(iXUnit, iYUnit) {
	vPlayerPos = [
		vLastPlayerPos[0] + iXUnit * 16,
		vLastPlayerPos[1] + iYUnit * 16,
	];
	DrawPlayer();
}

function DrawPlayer() {
	ctx.clearRect(vLastPlayerPos[0], vLastPlayerPos[1], SIZE_UNIT, SIZE_UNIT);
	ctx.fillRect(vPlayerPos[0], vPlayerPos[1], SIZE_UNIT, SIZE_UNIT);

	vLastPlayerPos = [vPlayerPos[0], vPlayerPos[1]];
}

DrawPlayer();
