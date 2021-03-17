// import React, { Component } from 'react'
// import { FormControl, InputGroup,Form } from 'react-bootstrap'
// import { connect } from 'react-redux'
// import { updateDimention, updateWallHeight, updateLabel } from 'core/actions'



// export class EngInputRow extends Component {

//   constructor(props) {
//     super(props)

//     this.state = {
//       value: this.props.value,
//       labelled: this.props.labelled
//     }
//   }


//   updateInput = event => {

//     const target = event.target;
//     const number = target.value;
//     const name = target.name;

//     //text input converted to number
//     const newValue = Number(number)



//     //update local state
//     this.setState({ ...this.state, value: newValue})

//     //update global store. dispatch
//     this.props.updateDimention(name, newValue)

//     //update height is store
//     this.props.updateHeight()

//   }

//   // https://reactjs.org/docs/forms.html
//   updateLabelState = id => {
     
//     // console.log(id)

//     this.props.updateLabel(id)
//     // const target = event.target;
//     // const state = target.checked;
//     // const name = target.name;

//     //new checkbox state
//     // let newState = !label

//     // this.setState({ label : newState })

//     // //update global store. dispatch
//     // this.props.updateLabel(name, newState)

//   }


//   // https://react-bootstrap.github.io/components/forms/#forms-validation-native
//   //https://stackoverflow.com/questions/29715655/html-5-input-type-date-disable-keyboard-input


//   render() {

//     const {step,min,label,id,readOnly,unit,labelled} = this.props

  

//     return (
//       <InputGroup className="mb-3">
//         <InputGroup.Prepend>
//           <InputGroup.Text className='extendFull'>{this.props.label}</InputGroup.Text>
//         </InputGroup.Prepend>
//         <FormControl
//           required
//           type="number"
//           onKeyDown={(e) => e.preventDefault()}
//           step={step}
//           min={min}
//           aria-label={label}
//           name={id}
//           className='flexshrink'

//           //chnage local state with every update if readOnly is not set
//           onChange={event => !readOnly ? this.updateInput(event) : null}

//           //if user changed is not allowed, ie rewadOnly is true, always diplayed from props passed down, display from props, else display from local state

//           value={readOnly ? this.props.value : this.state.value}

//           readOnly={readOnly}
//         />

// {/* https://react-bootstrap.github.io/components/forms/#forms-form-check */}

//          <InputGroup.Append>
   
  
//            {unit &&  <InputGroup.Text>{this.props.unit}</InputGroup.Text>}
  

//            {labelled &&   <Form.Check inline type="checkbox" label="Label"  onChange={event =>  this.updateLabelState(this.props.id) }/>}
  

   
//            </InputGroup.Append> 

//       </InputGroup>
//     )
//   }
// }


// const mapDispatchToProps = dispatch => {
//   return {
//     // dispatching actions returned by action creators
//     updateDimention: (name, value) => dispatch(updateDimention(name, value)),
//     updateHeight: () => dispatch(updateWallHeight()),
//     updateLabel: (name, value) => dispatch(updateLabel(name, value))
//   }
// }

// export default connect(
//   null,
//   mapDispatchToProps
// )(EngInputRow);

