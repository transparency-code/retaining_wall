import React from 'react';
import { Wedge } from 'react-konva';
import { startxofWallfromLeft, startyofWallfromBottom, gapbetweenwallandWidthLine } from './constants';
import { DirectionXHorizontal, DirectionYVertical, TagAt } from './enums';
import { AppPoint } from './AppPoint';
import { AppLine } from './AppLine';
import { Wscale } from './util';
import { WallLine } from './WallLine';
import { lineColor } from './constants';
import PropTypes from 'prop-types';


/**
 * Represents a Wall. 
 * Creates Line Objects
 * renders multiple WallLine using Line Objects
 * 
 */
export class Wall extends React.Component {
  render() {

    // console.log(this.props)
    const { Hn, Bn, Tb, B1, Twbottom, Twtop, CapH, B, Tn, smallh, Beta } = this.props;

    //console.log(CapH)

    const startPoint = new AppPoint(startxofWallfromLeft, startyofWallfromBottom);

    const line1B = new AppLine(
      startPoint,
      startPoint.createSuccesivePoint(DirectionXHorizontal.RIGHT, DirectionYVertical.CONSTANT, Wscale(B.value), 0),
      'basewidth'
    );

    const line2inv = new AppLine(
      startPoint,
      startPoint.createSuccesivePoint(
        DirectionXHorizontal.CONSTANT,
        DirectionYVertical.TOP,
        0,
        Wscale(Hn.value) + gapbetweenwallandWidthLine
      ),
      'basewidth'
    );

    const line3Tb = line2inv.createSuccesiveLine(
      DirectionXHorizontal.CONSTANT,
      DirectionYVertical.TOP,
      0,
      Wscale(Tb.value),
      'thicknessofbase'
    );

    const line4B1 = line3Tb.createSuccesiveLine(
      DirectionXHorizontal.RIGHT,
      DirectionYVertical.CONSTANT,
      Wscale(B1.value),
      0,
      'offsetofwallstemfromtoe'
    );

    //this line is created by substracting Height from thickness of base
    const lineToTop = line4B1.createSuccesiveLine(
      DirectionXHorizontal.RIGHT,
      DirectionYVertical.TOP,
      Wscale(Twbottom.value - Twtop.value),
      Wscale(CapH.value - Tb.value)
    );

    const line5twbottom = line4B1.createSuccesiveLine(
      DirectionXHorizontal.RIGHT,
      DirectionYVertical.CONSTANT,
      Wscale(Twbottom.value),
      0,
      'thicknessofwallstematbottom'
    );

    const line6Twtop = lineToTop.createSuccesiveLine(
      DirectionXHorizontal.RIGHT,
      DirectionYVertical.CONSTANT,
      Wscale(Twtop.value),
      0,
      'thicknessofwallstemattop'
    );

    //constructed from end points of two previous lines
    const line7 = new AppLine(line6Twtop.endPoint, line5twbottom.endPoint);

    const line8 = line5twbottom.createSuccesiveLine(
      DirectionXHorizontal.RIGHT,
      DirectionYVertical.CONSTANT,
      Wscale(B.value - B1.value - Twtop.value),
      0
    );

    const line9Tb = line8.createSuccesiveLine(
      DirectionXHorizontal.CONSTANT,
      DirectionYVertical.BOTTOM,
      0,
      Wscale(Tb.value),
      'thicknessofbase'
    );

    const line10 = line9Tb.createSuccesiveLine(
      DirectionXHorizontal.LEFT,
      DirectionYVertical.CONSTANT,
      Wscale(B.value - Bn.value - Tn.value),
      0
    );

    const line11Hn = line10.createSuccesiveLine(
      DirectionXHorizontal.CONSTANT,
      DirectionYVertical.BOTTOM,
      0,
      Wscale(Hn.value),
      'heightofshearkey'
    );

    const line12Tn = line11Hn.createSuccesiveLine(
      DirectionXHorizontal.LEFT,
      DirectionYVertical.CONSTANT,
      Wscale(Tn.value),
      0,
      'thicknessofshearkey'
    );

    const line13Hn = line12Tn.createSuccesiveLine(
      DirectionXHorizontal.CONSTANT,
      DirectionYVertical.TOP,
      0,
      Wscale(Hn.value),
      'heightofshearkey'
    );

    const line14Bn = line13Hn.createSuccesiveLine(
      DirectionXHorizontal.LEFT,
      DirectionYVertical.CONSTANT,
      Wscale(Bn.value),
      0,
      'offsetofshearkeyfromtoe'
    );

    const linepoint1forH = line9Tb.getXOffsetPointfromlineEnd(20);

    const linepoint2forH = linepoint1forH.createSuccesivePoint(
      DirectionXHorizontal.CONSTANT,
      DirectionYVertical.TOP,
      0,
      Wscale(CapH.value)
    );

    const linecapH = new AppLine(linepoint1forH, linepoint2forH, 'heightofwall');

    const linesmallh = linecapH.createSuccesiveLine(
      DirectionXHorizontal.CONSTANT,
      DirectionYVertical.TOP,
      0,
      Wscale(smallh.value),
      'heightfromtopofwalltotopofbackfillslope'
    );

    //just to show label of angle properly
    const lineforangleinv = line6Twtop.createSuccesiveLine(
      DirectionXHorizontal.CONSTANT,
      DirectionYVertical.TOP,
      0,
      //dummy value
      Wscale(0.2),
      'backfillinclination'
    );

    // console.log(linesmallh)

    return (
      <React.Fragment>
        <WallLine
          line={line1B}
          tag={B.labelled}
          tagAt={TagAt.BOTTOM}
          tagText={'B='.concat(B.value)}

        />

        <WallLine
          line={line2inv}
          inv={true}
        />

        <WallLine
          line={line3Tb}
          tag={Tb.labelled}
          tagAt={TagAt.RIGHT}
          tagText={'Tb='.concat(Tb.value)}
        />

        <WallLine
          line={line4B1}
          tag={B1.labelled}
          tagAt={TagAt.TOP}
          tagText={'B1='.concat(B1.value)}
        />

        {/* Tag information is not passed for not tagging */}
        {/* There are two line 5's */}
        <WallLine line={lineToTop}
          tag={false} />

        <WallLine
          line={line5twbottom}
          tag={Twbottom.labelled}
          tagAt={TagAt.BOTTOM}
          tagText={'Twbottom='.concat(Twbottom.value)}
          inv={true}
        />

        <WallLine
          line={line6Twtop}
          tag={Twtop.labelled}
          tagAt={TagAt.TOP}
          tagText={'TwTop='.concat(Twtop.value)}
        />

        <WallLine line={line7} />

        <WallLine line={line8} />

        <WallLine line={line9Tb} />

        <WallLine line={line10} />

        <WallLine
          line={line11Hn}
          tag={Hn.labelled}
          tagAt={TagAt.RIGHT}
          tagText={'Hn='.concat(Hn.value)}
        />

        <WallLine
          line={line12Tn}
          tag={Tn.labelled}
          tagAt={TagAt.BOTTOM}
          tagText={'Tn='.concat(Tn.value)}
        />

        <WallLine
          line={line13Hn}
          tag={false}
        />

        <WallLine
          line={line14Bn}
          tag={Bn.labelled}
          tagAt={TagAt.BOTTOM}
          tagText={'Bn='.concat(Bn.value)}
        />

        <WallLine
          line={linecapH}
          tag={CapH.labelled}
          tagAt={TagAt.LEFT}
          tagText={'H='.concat(CapH.value)}
        />


        {/* Conditional Render using ternary */}
        {smallh.value !== 0 && (
          <React.Fragment>

            <WallLine
              line={linesmallh}
              tag={smallh.labelled}
              tagAt={TagAt.LEFT}
              tagText={'h='.concat(smallh.value)}
            />

            <Wedge
              x={line6Twtop.endPoint.x}
              y={line6Twtop.endPoint.y}
              radius={linesmallh.startPoint.x - line6Twtop.endPoint.x}
        

              //with Beta value, angle if formed downward
              //with 360-Beta value, angle if formed upward
              angle={360 - Beta.value}

              // clockwise true ,arc is formed outside
              clockwise={ true }
              stroke={lineColor}
            />

            <WallLine
              line={lineforangleinv}
              tag={Beta.labelled}
              tagAt={TagAt.LEFT}
              tagText={'β='.concat(Beta.value)}
              inv={true}
            />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}


Wall.propTypes = {
  Hn: PropTypes.object,
  Bn: PropTypes.object,
  Tb: PropTypes.object,
  B1: PropTypes.object,
  Twbottom: PropTypes.object,
  Twtop: PropTypes.object,
  CapH: PropTypes.object,
  B: PropTypes.object,
  Tn: PropTypes.object,
  smallh: PropTypes.object,
  Beta: PropTypes.object,
};
