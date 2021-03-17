import { DirectionXHorizontal, DirectionYVertical } from './enums';

/**
 * Point Class
 */
export class AppPoint {

  /**
   * @constructor
   * @param {number} x 
   * @param {number} y 
   */
  constructor(x, y) {
    if (isNaN(x) || isNaN(y)) {
      throw new Error(`Point Constructor . X and Y should be numbers . Received ${x} and ${y}`);
    }
    this.x = x;
    this.y = y;
  }

  /**
   * 
   * @param {DirectionYVertical} directionx 
   * @param {DirectionXHorizontal} directiony 
   * @param {number} movex 
   * @param {number} movey 
   */
  createSuccesivePoint(
    directionx,
    directiony,
    movex,
    movey,
  ) {
    switch (directionx) {
      case DirectionXHorizontal.LEFT:
        movex = -Math.abs(movex);
        break;
      case DirectionXHorizontal.CONSTANT:
        movex = 0;
        break;
      default:
    }

    switch (directiony) {
      case DirectionYVertical.TOP:
        movey = -Math.abs(movey);
        break;
      case DirectionYVertical.CONSTANT:
        movey = 0;
        break;
      default:
    }

    return new AppPoint(this.x + movex, this.y + movey);
  }
}