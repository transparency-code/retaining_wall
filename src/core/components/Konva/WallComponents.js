// import React from 'react';
// import { Text, Line, Group, Tag, Label } from 'react-konva';
// import { linecolor } from './constants';
// const has = require('lodash/has');

// export function WallLineWithLabel(props) {
//   return (
//     <Group>
//       {props.renderLine === false ? null : <Line points={props.line.getPointArray()} stroke={linecolor} />}
//       <Label x={props.line.gettagpointXforLabel()} y={props.line.gettagpointYforLabel()}>
//         <Tag
//           pointerDirection={props.TagAt.pointerDirection}
//           pointerWidth={props.TagAt.pointerWidth}
//           pointerHeight={props.TagAt.pointerHeight}
//           stroke={'grey'}
//         />
//         <Text text={props.tagtext} padding={3} />
//       </Label>
//     </Group>
//   );
// }

// export function WallLineWithoutLabel(props) {

//   const {renderLine} = props;

//   if (!renderLine) {
//     return null;
//   }

//   return <Line points={props.line.getPointArray()} stroke={linecolor} />;
// }

// export class LineComponent extends React.Component {
//   //render component with or without label based on a prop Object of LabelFlags
//   render() {
//     const hasaLabel = has(this.props.labelflags, this.props.line.lineID);
//     const showLabel = hasaLabel ? this.props.labelflags[this.props.line.lineID] : false;
//     let line;

//     if (showLabel) {
//       line = (
//         <WallLineWithLabel
//           line={this.props.line}
//           TagAt={this.props.TagAt}
//           tagtext={this.props.tagtext}
//           renderLine={this.props.renderLine}
//         />
//       );
//     } else {
//       line = <WallLine line={this.props.line} renderLine={this.props.renderLine} />;
//     }

//     return line;
//   }
// }