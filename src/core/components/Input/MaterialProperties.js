import React from 'react'
import GenericBlock from 'core/components/Input/GenericBlock'
import { connect } from 'react-redux'
import initialData from 'core/data/materialData'
import {materialStyle} from './css/'

export class MaterialProperties extends React.Component {
    
    render() {

       const {materialPropertiesState, initialData} = this.props;
        return (      
                <GenericBlock
                currentObject={materialPropertiesState} 
                initialObject={initialData}
                style={materialStyle}
                 />
        )
   
}}

const mapStateToPropsMaterialProperties = (state) => ({
    materialPropertiesState : state.rwApp.material,
    initialData,

})

export const connectedMaterialProperties =  connect(mapStateToPropsMaterialProperties)(MaterialProperties)