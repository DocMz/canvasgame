export const CANVAS_WIDTH = 800;
export const CANVAS_HEIGHT = 800;
export const SIZE_UNIT = 32;

import { setPlayerPos, DrawPlayer, MovePlayer } from './player';

var canvas = document.getElementById('canvas');
export var ctx = canvas.getContext('2d');

DrawPlayer();
