// import React from 'react'
// import EngInputRow from './EngInputRow'


// export default function EngBlock({currentObject,initialObject, onInputChange}) {

//     //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
//     // The Object.keys() method returns an array of a given object's own property names, in the same order as we get with a normal loop.
    
//     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//     //The filter() method creates a new array with all elements that pass the test implemented by the provided function.

//     //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//     //The map() method creates a new array with the results of calling a provided function on every element in the calling array.


//     const heading = initialObject.heading

//     //units are constants
//     const units = initialObject.units

//     //console.log(units)
 
//     const blockfields = Object.keys(units)
//       .map((key, index) => {
//         return (
//           <div key={index}>
//             <EngInputRow
//               label={units[key].label}
//               id={key}
//               unit={units[key].unit}
//               value={currentObject[key].value}
//               readOnly={units[key].readOnly}
//               // onInputChange={onInputChange}
//               // onCheckBoxChange={onCheckBoxChange}
//               step={units[key].step}
//               min={units[key].min}
//               labelled={units[key].hasLabel}
//               // labelflags={labelflags}
//             />
//           </div>
//         );
//       });

//     return (
//         <div>
//             <h3>{heading}</h3>
//             {blockfields}
//         </div>
//     )
// }

// //https://webdesign.tutsplus.com/tutorials/building-responsive-forms-with-flexbox--cms-26767