import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { connectedDimentions as Dimentions } from 'core/components/Input/Dimentions'
import { connectedMaterialProperties as MaterialProperties } from 'core/components/Input/MaterialProperties'
import { connectedSoilProperties as SoilProperties } from 'core/components/Input/SoilProperties'
import { connectedSurchargeLoading as SurchargeLoading } from 'core/components/Input/SurchargeLoading'
import { connectedLateralForceCoEfficient as LateralForceCoEfficient } from 'core/components/Input/LaterlForceCoEfficient'
import { connectedKonva as KonvaBox } from 'core/components/Konva/index'
import Links from 'core/components/Links'
import lateralforce from 'core/images/lateral_force.png'
import { BrowserRouter as Router, Route } from "react-router-dom"
import {padding3em} from './css'
//https://reacttraining.com/react-router/web/example/basic

// https://react-bootstrap.github.io/layout/grid/
export default function index() {


    return (
        <Router>
            <Container fluid={"false"}>
                <Row>

                    <Col xs={1}><Links /></Col>

                    {/* https://react-bootstrap.github.io/layout/grid/#auto-layout-variable-sizes */}
                    <Col md="auto">

                        <Route path="/dimentions" component={Dimentions} />
                        <Route path="/materialproperties" component={MaterialProperties} />
                        <Route path="/soilproperties" component={SoilProperties} />
                        <Route path="/surchargeloading" component={SurchargeLoading} />
                        <Route path="/lateralforcecoefficients" component={LateralForceCoEfficient} />
                    </Col>

                    <Col xs={5}>
                        {/* <KonvaBox/> */}
                        <Route path="/dimentions" component={KonvaBox} />
                        <Route path="/lateralforcecoefficients" component={ () => <img src={lateralforce} alt="FormulaImage" style={padding3em}/>} />
                    </Col>
                </Row>
            </Container>
        </Router>
    )
}

