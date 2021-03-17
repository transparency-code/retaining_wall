// export const updateStore= (name,value) => {

//     // console.log(name)
//     // console.log(value)
//     return {
//         type : 'UPDATE_STORE',
//         payload : {
//            name,
//            value 
//         }
//     }
// }

// export const updateDimention = (name,value) => {
//     return {
//         type : 'UPDATE_DIMENTION',
//         payload : {
//            name,
//            value 
//         }
//     }
// }

export const updateUnit = (name,value) => {
    return {
        type : 'UPDATE_UNIT',
        payload : {
           name,
           value 
        }
    }
}



export const updateLabel = (id) => {
    return {
        type : 'UPDATE_LABEL',
        payload : {
           id
        }
    }
}

export const calculateLaterlCoeffs = (dafrm,cefa,beta) => {
    return {
        type : 'UPDATE_LATERAL_COEFF',
        payload : {
           dafrm,
           cefa,
           beta
        }
    }
}

export const updateDimentionDependents = () => ({ type : 'UPDATE_DIMENTION_DEPENDENTS'})
export const updateSoilDependents = () => ({ type : 'UPDATE_SOIL_DEPENDENTS'})
      
