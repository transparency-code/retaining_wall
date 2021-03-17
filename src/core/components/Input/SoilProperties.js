import React from 'react'
import GenericBlock from 'core/components/Input/GenericBlock'
import { connect } from 'react-redux'
import initialData from 'core/data/soilData'
import {updateSoilDependents} from 'core/actions/index'
import {soilStyle} from './css/'


export class SoilProperties extends React.Component {
    
    render() {

       const {soilPropertiesState, initialData} = this.props;
        return (      
                <GenericBlock
                currentObject={soilPropertiesState} 
                initialObject={initialData}
                updateDependents={updateSoilDependents}
                style={soilStyle}
                 />
        )
   
}}

const mapStateToPropsSoilProperties = (state) => ({
    soilPropertiesState : state.rwApp.soil,
    initialData,

})

export const connectedSoilProperties =  connect(mapStateToPropsSoilProperties)(SoilProperties)