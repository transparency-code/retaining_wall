/**
 * AppPoint Class
 * 
 */
import { AppPoint } from './AppPoint';

//Line have startpoint, endpoint and ID
//functions
export class AppLine {

  constructor(startPoint, endPoint, lineID) {
    if (!(startPoint instanceof AppPoint) || !(endPoint instanceof AppPoint)) {
      throw new Error(
        `Line Constructor . X and Y should be points. Received ${startPoint.toString()} and ${endPoint.toString()}`
      );
    }

    this.startPoint = startPoint;
    this.endPoint = endPoint;
    this.lineID = lineID;
  }

  getPointArray() {
    const points = [this.startPoint.x, this.startPoint.y, this.endPoint.x, this.endPoint.y];
    return points;
  }

  getAnEndPointForLine(
    directionx,
    directiony,
    movex,
    movey
  ) {
    return this.endPoint.createSuccesivePoint(directionx, directiony, movex, movey);
  }

  createSuccesiveLine(
    directionx,
    directiony, 
    movex,
    movey,
    lineID,
  ) {
    const newline = new AppLine(this.endPoint, this.getAnEndPointForLine(directionx, directiony, movex, movey));

    if (lineID) {
      newline.lineID = lineID;
    }

    return newline;
  }

  getXOffsetPointfromlineEnd(xOffset) {
    const newPoint = new AppPoint(this.endPoint.x + xOffset, this.endPoint.y);
    return newPoint;
  }

  gettagpointXforLabel() {
    return (this.startPoint.x + this.endPoint.x) / 2;
  }

  gettagpointYforLabel() {
    return (this.startPoint.y + this.endPoint.y) / 2;
  }
}