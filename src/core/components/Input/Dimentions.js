import React from 'react'
import GenericBlock from 'core/components/Input/GenericBlock'
import { connect } from 'react-redux'
import initialData from 'core/data/dimentions'
import {updateDimentionDependents} from 'core/actions/index'
import {genericStyle} from './css/'


export class Dimentions extends React.Component {

    // https://reactjs.org/docs/handling-events.html


    // constructor(props) {
    //     super(props)
    //     // console.log(this.props)
    //      this.state =  this.props.dimentionsState     
    // }
    
    
   
    render() {

        //console.log(this.props.dimentionsState)
        // return (      
        //         <EngBlock 
        //         currentObject={this.props.dimentionsState} 
        //         initialObject={this.props.initialData} 
        //         // onInputChange={this.props.inputChange} 
        //          />
        // )

        const {dimentionState, initialData} = this.props;

        return (      
                <GenericBlock
                currentObject={dimentionState} 
                initialObject={initialData}
                updateDependents={updateDimentionDependents}
                style={genericStyle}
                 />
        )
   
}}

const mapStateToPropsDimentions = (state) => ({
    dimentionState : state.rwApp.dimention,
    initialData,

})

export const connectedDimentions =  connect(mapStateToPropsDimentions)(Dimentions)