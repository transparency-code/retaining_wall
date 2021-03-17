import React from 'react'
import GenericInputRow from './GenericInputRow'


export default function GenericBlock({currentObject,initialObject, updateDependents, style}) {

    
    const heading = initialObject.heading

    //units are constants
    const units = initialObject.units

    // console.log(heading)
    //  console.log(units)
    // console.log(currentObject)
 
 
    //iterates over whats in data file, initialObject and displays input for each
    const blockfields = Object.keys(units)
      .map((key, index) => {
        return (
          <div key={index}>
            <GenericInputRow
              label={units[key].label}
              id={key}
              unit={units[key].unit}
              value={currentObject[key].value}
              readOnly={units[key].readOnly}
              step={units[key].step}
              min={units[key].min}
              labelled={units[key].hasLabel}
              //This is passed seperately as props
              updateDependents={updateDependents}
              style={style}
            />
          </div>
        );
      });

    return (
        <div>
            <h3>{heading}</h3>
            {blockfields}
        </div>
    )
}
