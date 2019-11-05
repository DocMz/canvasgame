import { SIZE_UNIT, ctx, GRIDCOUNT } from './index';
import { getPlayerPos } from './player';

export const OPENING_SIZE = 5;
export const WALL_SPACE = 10;

var wallPostions = [];

export function DrawWalls() {
	wallPostions.unshift(GenerateWallArray(wallPostions.length));
	for (let iXIndex = 0; iXIndex < GRIDCOUNT; iXIndex++) {
		if (wallPostions[iXIndex] !== null) {
			let currentWallPos = wallPostions[iXIndex];

			if (currentWallPos !== undefined) {
				currentWallPos.forEach(function(isWall, index) {
					if (isWall) {
						ctx.fillRect(
							(GRIDCOUNT - iXIndex) * SIZE_UNIT,
							index * SIZE_UNIT,
							SIZE_UNIT,
							SIZE_UNIT
						);
					}
				});
			}
		}
	}
}

function GenerateWallArray(iXIndex) {
	let wallArray = [];

	if (iXIndex % WALL_SPACE === 0) {
		let openingCoordinate = Math.round(Math.random() * GRIDCOUNT);
		console.log(openingCoordinate);

		for (let iYIndex = 0; iYIndex < GRIDCOUNT; iYIndex++) {
			if (
				iYIndex < openingCoordinate - OPENING_SIZE ||
				iYIndex > openingCoordinate + OPENING_SIZE
			) {
				wallArray[iYIndex] = true;
			} else {
				wallArray[iYIndex] = false;
			}
		}
		return wallArray;
	} else {
		return null;
	}
}
