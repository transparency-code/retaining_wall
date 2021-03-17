import React from 'react'
import { WallLineWithLabel } from './WallLineWithLabel'
import { WallLineWithOutLabel } from './WallLineWithOutLabel'
import { AppLine } from './AppLine'
import PropTypes from 'prop-types';
import { TagAt } from './enums'

/**
 * A WallLine can be WallLineWithLabel or WallLineWithOutLabel
 * render WallLineWithLabel or WallLineWithOutLabel  based on a prop Object of tag
 * 
 * @inv {bool} true if line is invisible
 */
export class WallLine extends React.Component {


  render() {

    const { line, tag, tagAt, tagText, inv} = this.props;

    // console.log(inv)

    //No tag information will cause a WallLineWithOutLabel
    const wallLine = tag  ? <WallLineWithLabel
                          line={line}
                          tagAt={tagAt}
                          tagText={tagText}
                          inv={inv}
                        />
                      : <WallLineWithOutLabel line={line} inv={inv} />
  

    return wallLine;
  }
}

//https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
//https://github.com/facebook/react/issues/2979
//instanceOf expects a regular JavaScript "class" and not a React class
//https://github.com/facebook/react/issues/2979#issuecomment-137183455
WallLine.propTypes = {
  line: PropTypes.shape({type: PropTypes.oneOf([AppLine])}),
  tag : PropTypes.bool,
  tagAt: PropTypes.shape({type: PropTypes.oneOf([TagAt])}),
  tagText: PropTypes.string,
  shouldRender: PropTypes.bool,
}