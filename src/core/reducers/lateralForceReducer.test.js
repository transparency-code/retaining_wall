import  lateralForceReducer from 'core/reducers/lateralForceReducer'

test('test lateralForceReducer : default values', () => {

    let state = {}
    state.dimention= {}
    state.soil= {}
    state.dimention.backfillinclination = 0
    state.soil.designAngleofFrictionofRetainedMaterial = 25.33
    state.soil.characteristicExternalFrictionAngle = 25.33
  
    const result = lateralForceReducer(state)

    expect(result).toHaveProperty('activeSoilCoEfficient')
  });
  