import React from 'react'
import GenericBlock from 'core/components/Input/GenericBlock'
import initialData from 'core/data/lateralForceCoEfficient'
import { connect } from 'react-redux'
import {floatPointInputStyle} from './css'

export class LateralForceCoEfficient extends React.Component {
    
    render() {

       const {lateralForceCoEff} = this.props;
        return (      
                <GenericBlock
                currentObject={lateralForceCoEff} 
                //heading requires initalDate
                initialObject={initialData}
                style={floatPointInputStyle}
                 />
        )
   
}}

const mapStateToPropsLateralForceCoEfficient  = (state) => ({
        lateralForceCoEff : state.rwApp.lateralForceCoEff,
})

export const connectedLateralForceCoEfficient  =  connect(mapStateToPropsLateralForceCoEfficient)(LateralForceCoEfficient)