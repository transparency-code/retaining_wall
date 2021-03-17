import React from 'react'
import {  Line } from 'react-konva';
import { lineColor , backgroundColor} from './constants';

/**
 * 
 * @inv{bool} true if line is invisible
 */
export function WallLineWithOutLabel(props) {

    const {line,inv} = props;
    
   let color = lineColor

    if (inv) {
      color = backgroundColor
    }
  
    // console.log(color)
    return <Line points={line.getPointArray()} stroke={color} />;
  }