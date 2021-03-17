import React from "react"

import {ListGroup} from 'react-bootstrap'
import { Link } from "react-router-dom"
import { linksdata } from 'core/data/links'
import './index.css'

// https://reacttraining.com/react-router/web/example/basic
// https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822
// https://react-bootstrap.netlify.com/components/list-group/#basic-example

const Links = () => {

    //Warning: Each child in a list should have a unique "key" prop. Added Key
    //https://stackoverflow.com/questions/18159216/remove-white-space-between-the-string-using-javascript
    const listGroupItems = linksdata.map( (item,index) => <ListGroup.Item key={index}><Link to={item.replace(/ +/g,"").toLowerCase()}>{item}</Link></ListGroup.Item> )

    return(

            <ListGroup className="Links">
                {listGroupItems}
            </ListGroup>

    )
}

export default Links