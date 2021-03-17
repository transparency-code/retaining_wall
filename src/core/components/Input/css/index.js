/* https://www.w3schools.com/react/react_css.asp */
/* create an object with styling information, and refer to it in the style attribute: */

/* for use in InputGroup.Prepend */
const flexbasis60 = {
      flex: "0 0 60%"
};

/* for use in InputGroup.Prepend */
const flexbasis70 = {
      flex: "0 0 70%"
};

/* for use in InputGroup.Prepend */
const flexbasis55 = {
      flex: "0 0 55%"
};

/* for use in InputGroup.Append*/
const flexgrow5 = {
      flex: "5 0 0"
}

/* InputGroup.Text is label text 
Enable them to take all off flex width */
const width100 = {
      width: "100%"
}

/*This is for checkbox label */
const marginLeft5 = {
      marginLeft: "5px"
}


const flexgrow3 = {
      flex: "3 0 0"
}

const flexgrow2 = {
    flex: "2 0 0"
}


    
export const genericStyle= {prepend: flexbasis60,append : flexgrow5, inputwidth : width100 , labelMargin : marginLeft5 }

export const materialStyle= {prepend: flexbasis55 ,append : flexgrow3, inputwidth : width100 , labelMargin : marginLeft5 }

export const soilStyle= {prepend: flexbasis70,append : flexgrow3, inputwidth : width100 , labelMargin : marginLeft5 }


export const floatPointInputStyle= {prepend: flexbasis55 ,append : flexgrow2, inputwidth : width100 , labelMargin : marginLeft5 }