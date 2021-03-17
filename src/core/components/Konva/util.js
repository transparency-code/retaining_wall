export const Wscale = (m, scale = 7) => {
    return parseFloat(((m * 1000) / scale).toFixed(2));
  };
  
  export function gettagpointx() {
    return (this.x1 + this.x2) / 2;
  }
  
  export function gettagpointy() {
    return (this.y1 + this.y2) / 2;
  }


  export const createintialLabelstate = (state,intialData) => {
      
    return state
  }