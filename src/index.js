export const CANVAS_WIDTH = 800;
export const CANVAS_HEIGHT = 800;
export const SIZE_UNIT = 32;
export const GAMETICK = 100;

export const GRIDCOUNT = CANVAS_WIDTH / SIZE_UNIT;

import { setPlayerPos, getPlayerPos, DrawPlayer } from './player';
import { DrawWalls } from './walls';

var canvas = document.getElementById('canvas');
export var ctx = canvas.getContext('2d');

var mainInterval = setInterval(function() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	DrawPlayer();
	DrawWalls();
}, GAMETICK);
