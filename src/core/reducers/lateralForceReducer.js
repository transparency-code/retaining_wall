import  {calculate_activeSoilCoEfficient} from 'core/util'

export default  (state) => {

    const backfillinclination = state.dimention.backfillinclination.value
    const designAngleofFrictionofRetainedMaterial = state.soil.designAngleofFrictionofRetainedMaterial.value
    const characteristicExternalFrictionAngle = state.soil.characteristicExternalFrictionAngle.value

    const activeSoilCoEfficient = calculate_activeSoilCoEfficient(designAngleofFrictionofRetainedMaterial,characteristicExternalFrictionAngle,backfillinclination)

    return ({ activeSoilCoEfficient : { value : activeSoilCoEfficient} })
 
}
