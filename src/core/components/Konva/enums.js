/**
 * {LEFT,RIGHT,CONSTANT}
 */
export const DirectionXHorizontal = {
    LEFT: 'left',
    RIGHT: 'right',
    CONSTANT: 'constant'
  };
  
  /**
   * {TOP,BOTTOM,CONSTANT}
   */
  export const DirectionYVertical = {
    TOP: 'left',
    BOTTOM: 'bottom',
    CONSTANT: 'constant'
  };
  
  /**
   * {LEFT,RIGHT,TOP,BOTTOM}
   */
  export const TagAt = {
    LEFT: {
      pointerDirection: 'right',
      pointerWidth: 10,
      pointerHeight: 15
    },
  
    RIGHT: {
      pointerDirection: 'left',
      pointerWidth: 10,
      pointerHeight: 15
    },
  
    TOP: {
      pointerDirection: 'down',
      pointerWidth: 15,
      pointerHeight: 10
    },
  
    BOTTOM: {
      pointerDirection: 'up',
      pointerWidth: 15,
      pointerHeight: 10
    }
  };
