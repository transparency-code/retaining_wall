//This coverts initial data into state
export const createstateFromInitialData = (blockData) => {

    const units = blockData.units
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
    //The Object.keys() method returns an array of a given object's own property names, in the same order as we get with a normal loop.

    //https://dev.to/zellwk/looping-through-objects-in-javascript-3c6b
    //The better way to loop through objects is first convert it into an array
    const dimentionsKeys = Object.keys(units)

    let accumulator = {}

    for (const key of dimentionsKeys) {
      //https://dmitripavlutin.com/object-rest-spread-properties-javascript/
      // https://stackoverflow.com/questions/17781472/how-to-get-a-subset-of-a-javascript-objects-properties/54613019
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals

        //het object
        const object =  units[key];

        //pick certain keys by destructuring
        const {value, hasLabel} = object 

        let newObject =  hasLabel ? ({value, labelled : false}) : ({value})

        // console.log(newObject)

        //https://dmitripavlutin.com/object-rest-spread-properties-javascript/
        //adding to accumulator
        accumulator = { ...accumulator,
                        [key] : {
                          ...newObject
                        } 
        }

       // console.log(accumulator)
    }

    return accumulator

}



//this calculates the
// http://cwestblog.com/2012/11/12/javascript-degree-and-radian-conversion/
// Converts from degrees to radians.
Math.radians = function(degrees) {
    return (degrees * Math.PI) / 180;
  };

export const calculateHeight = (basewidth,thicknessofwallstematbottom,offsetofwallstemfromtoe,backfillinclination) => {
  const rad = Math.radians(backfillinclination);
  const tanvalue = Math.tan(rad);
  const value = tanvalue * (basewidth - offsetofwallstemfromtoe - thicknessofwallstematbottom);
  return Math.round(value * 100) / 100;
}

//calculate Design Angle of Friction of Retained Materia
export const calculateDAFofRM = (DAinternalfrictionofretainedmaterial, uncertaintyfactorforretainedmaterial) => {
  const DAFofRM = calculateDesignAngleOfFriction(DAinternalfrictionofretainedmaterial,uncertaintyfactorforretainedmaterial)
  return DAFofRM
}

//calculate Design Angle of Friction of Base Material
export const calculateDAFofBM = (DAinternalfrictionofbasematerial, uncertaintyfactorforbasematerial) => {
  const DAFofBM= calculateDesignAngleOfFriction(DAinternalfrictionofbasematerial,uncertaintyfactorforbasematerial)
  return DAFofBM
}

const calculateDesignAngleOfFriction = (value1,value2) => {
  const rad = Math.radians(value1);
  const tanValue = Math.tan(rad);
  const product = tanValue * value2
  const atanOfproduct = Math.atan(product)
  const radianValue = atanOfproduct * (180/Math.PI);

  //Convert to degress
  //https://www.w3resource.com/javascript-exercises/javascript-math-exercise-34.php
  return radianValue
}

/**
 * 
 * @param {number} dafrm - Design Angle of Friction of Retained Materia
 * @param {number} cefa - Characteristic External Friction Angle
 * @param {number} beta - Backfill Inclination (β)
 */
export const calculate_activeSoilCoEfficient = (dafrm,cefa,beta) => {

  //convert values to rad
  const dafrm_rad = Math.radians(dafrm)
  const cefa_rad = Math.radians(cefa)
  const beta_rad = Math.radians(beta)
  const dafrm_rad_cos= Math.cos(dafrm_rad)

  //COS(RADIANS(A46))^2
  //0.818,in default
  const numerator = Math.pow(dafrm_rad_cos,2)


  const cefa_rad_neg = cefa_rad * -1
  //COS(RADIANS(A47)*-1)
 //0.904 in default
  const denominator = Math.cos(cefa_rad_neg)

  //0.904 in default
  const numerator2 = numerator/denominator

  //0.880
  const sum_dafrm_cefa = dafrm_rad + cefa_rad
  //0.771
  const sum_dafrm_cefa_sin = Math.sin(sum_dafrm_cefa)
  //0.440
  const diff_dafrm_beta = dafrm_rad - beta_rad
  //0.426
  const diff_dafrm_beta_sin = Math.sin(diff_dafrm_beta)
 //0.328
  const aNumerator= sum_dafrm_cefa_sin * diff_dafrm_beta_sin
  //0.363

  const dafrm_rad_neg = dafrm_rad * -1

  const aDenominator = Math.cos(dafrm_rad_neg)

  const aNumerator2 = aNumerator / aDenominator

  const aDenominator2 = Math.cos(beta_rad)

  //0.363
  const aDenominator3 = aNumerator2/aDenominator2

  //0.602
  const asqrt = Math.sqrt(aDenominator3)
  const asqrt_plus1 = asqrt + 1
  //2.568
  const aDenominator4 = Math.pow(asqrt_plus1,2)

  //0.904/2.569
  const activeSoilcoeff= numerator2/aDenominator4

  //https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary
  //rounding
  return Math.round(activeSoilcoeff * 1000) / 1000

}
