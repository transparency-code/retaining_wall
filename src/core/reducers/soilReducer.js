import {calculateDAFofRM,calculateDAFofBM} from 'core/util'

const soilReducer = (state = {}, action) => {

    switch (action.type) {
        case 'UPDATE_UNIT':
            return { ...state, [action.payload.name]: { ...state[action.payload.name] , value : action.payload.value } }
        case 'UPDATE_SOIL_DEPENDENTS':
                //allowableGeoTechnicalBearingCapacity
                const { geoTechnicalUltimateBearingCapacity, strengthReductionFactorForBearing } = state      
   
                const newAllowableGeoTechnicalBearingCapacity = geoTechnicalUltimateBearingCapacity.value * strengthReductionFactorForBearing.value
                
                //update sate with new value
                state = {...state , allowableGeoTechnicalBearingCapacity: { ...state['allowableGeoTechnicalBearingCapacity'] , value : newAllowableGeoTechnicalBearingCapacity }}

                  //designAngleofFrictionofRetainedMaterial
                const { designAngleOfInternalFrictionOfRetainedMaterial , designUncertaintyFactorForFrictionAngleOfRetainedMaterial } = state
              

                const newDesignAngleofFrictionofRetainedMaterial = calculateDAFofRM(designAngleOfInternalFrictionOfRetainedMaterial.value, designUncertaintyFactorForFrictionAngleOfRetainedMaterial.value)

                //have to replave two values here
                state = {...state , designAngleofFrictionofRetainedMaterial: { ...state['designAngleofFrictionofRetainedMaterial'] , value : newDesignAngleofFrictionofRetainedMaterial },
                                    characteristicExternalFrictionAngle : {...state['characteristicExternalFrictionAngle'] , value : newDesignAngleofFrictionofRetainedMaterial}}


                const { designAngleOfInternalFrictionOfBaseMaterial , designUncertaintyFactorforFrictionAngleofBaseMaterial } = state

                 //designAngleofFrictionofBaseMaterial
                const newdesignAngleOfFrictionOfBaseMaterial = calculateDAFofBM(designAngleOfInternalFrictionOfBaseMaterial.value, designUncertaintyFactorforFrictionAngleofBaseMaterial.value)

                //update sate with new value
                state = {...state , designAngleOfFrictionOfBaseMaterial : { ...state['designAngleOfFrictionOfBaseMaterial '] , value : newdesignAngleOfFrictionOfBaseMaterial }}

                return   state
        default:
            return state

    }

}

export default soilReducer