import React, { Component } from 'react'
import { FormControl, InputGroup, Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { updateUnit, updateLabel } from 'core/actions'

export class GenericInputRow extends Component {

    constructor(props) {
        super(props)

        this.state = {
            value: this.props.value,
        }
    }


    updateInput = event => {

        const target = event.target;
        const number = target.value;
        const name = target.name;

        //text input converted to number
        const newValue = Number(number)

        //update local state
        this.setState({ ...this.state, value: newValue })

        // console.log(name)
        // console.log(newValue)
        //update global store. dispatch
        this.props.updateUnit(name, newValue)

        this.props.updateDependents()


    }

    updateLabelState = id => {
        // console.log(id)
        //this is update connected to dispatch, not the one that is imported
        this.props.updateLabel(id)

    }


    render() {

        const { step, min, label, id, readOnly, unit, labelled, style } = this.props

        // console.log(style)
        return (
            <InputGroup className="mb-3">
                <InputGroup.Prepend style={style.prepend}>
                    <InputGroup.Text style={style.inputwidth}>{this.props.label}</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    required
                    type="number"
                    onKeyDown={(e) => e.preventDefault()}
                    step={step}
                    min={min}
                    aria-label={label}
                    name={id}

                    //chnage local state with every update if readOnly is not set
                    onChange={event => !readOnly ? this.updateInput(event) : null}

                    //if user changed is not allowed, ie rewadOnly is true, always diplayed from props passed down, display from props, else display from local state

                    value={readOnly ? this.props.value : this.state.value}

                    readOnly={readOnly}
                />

                {/* https://react-bootstrap.github.io/components/forms/#forms-form-check */}

                <InputGroup.Append  style={style.append}>
       
                        {unit && <InputGroup.Text>{this.props.unit}</InputGroup.Text> }


                        {labelled && <Form.Check inline type="checkbox" label="Label"  style={style.labelMargin} onChange={event => this.updateLabelState(this.props.id)} />}
        
                </InputGroup.Append>
            </InputGroup>
        )
    }
}


//https://react-redux.js.org/using-react-redux/connect-mapdispatch
//using ownProps ( optional )
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        // dispatching actions returned by action creators
        updateUnit: (name, value) => dispatch(updateUnit(name, value)),

        //attach this only if an acton creator is passed down as prop
        updateDependents: () => ownProps.updateDependents ? dispatch(ownProps.updateDependents()) : null,

         //attach this only if is is prop labelled is true
        updateLabel: (name, value) => ownProps.labelled ? dispatch(updateLabel(name, value)) :  null
    }
}

//https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-the-mapdispatchtoprops-function-with-bindactioncreators
// // binding an object full of action creators
// const boundActionCreators = bindActionCreators(
//     { updateUnit },
//     dispatch
//   )

export default connect(
    null,
    mapDispatchToProps
)(GenericInputRow);
