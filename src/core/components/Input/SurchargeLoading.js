import React from 'react'
import GenericBlock from 'core/components/Input/GenericBlock'
import { connect } from 'react-redux'
import initialData from 'core/data/surchargeLoading'
import {genericStyle} from './css'

export class SurchargeLoading extends React.Component {
    
    render() {

       const {surchargeLoadingState, initialData} = this.props;
        return (      
                <GenericBlock
                currentObject={surchargeLoadingState} 
                initialObject={initialData}
                style={genericStyle}
                 />
        )
   
}}

const mapStateToPropsSurchargeLoading  = (state) => ({
    surchargeLoadingState : state.rwApp.surchargeLoading,
    initialData,

})

export const connectedSurchargeLoading  =  connect(mapStateToPropsSurchargeLoading)(SurchargeLoading )