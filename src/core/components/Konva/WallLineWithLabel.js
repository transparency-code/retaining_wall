import React from 'react'
import { Text, Group, Tag, Line, Label } from 'react-konva';
import { lineColor } from './constants';
import PropTypes from 'prop-types';
import { TagAt } from './enums';
import { AppLine } from './AppLine'

/**
 * A wall without Label
 * @inv {bool} true if line is invisible
 */
export function WallLineWithLabel(props) {

    const { line, tagAt, tagText, inv } = props

    return (
      <Group>
        {inv === true ? null : <Line points={line.getPointArray()} stroke={lineColor} />}
        <Label x={line.gettagpointXforLabel()} y={line.gettagpointYforLabel()}>
          <Tag
            pointerDirection={tagAt.pointerDirection}
            pointerWidth={tagAt.pointerWidth}
            pointerHeight={tagAt.pointerHeight}
            stroke={'grey'}
          />
          <Text text={tagText} padding={3} />
        </Label>
      </Group>
    );
  }

  WallLineWithLabel.propTypes = {
    line: PropTypes.instanceOf(AppLine),
    tagAt : PropTypes.instanceOf(TagAt),
    tagText: PropTypes.string,
    shouldRender: PropTypes.bool,
  }