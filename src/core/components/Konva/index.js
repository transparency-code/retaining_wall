import React, { Component } from 'react'
import { Stage, Layer } from 'react-konva';
import { connect } from 'react-redux'
import {Wall} from './Wall'
import initialData from 'core/data/dimentions'


class Konva extends Component {


    render() {

        // console.log(this.props)
        return (
            <Stage width={500} height={750}>
                <Layer>
                    <Wall
                        Hn={this.props.dimentions.heightofshearkey}
                        Bn={this.props.dimentions.offsetofshearkeyfromtoe}
                        Tb={this.props.dimentions.thicknessofbase}
                        B1={this.props.dimentions.offsetofwallstemfromtoe}
                        Twbottom={this.props.dimentions.thicknessofwallstematbottom}
                        Twtop={this.props.dimentions.thicknessofwallstemattop}
                        CapH={this.props.dimentions.heightofwall}
                        B={this.props.dimentions.basewidth}
                        Tn={this.props.dimentions.thicknessofshearkey}
                        smallh={this.props.dimentions.heightfromtopofwalltotopofbackfillslope}
                        Beta={this.props.dimentions.backfillinclination}
                        // labelflags={this.props.labelflags}
                    />
                </Layer>
            </Stage>
        )
    }
}

const mapStateToPropsDimentions = (state) => ({
    dimentions : state.rwApp.dimention,
    initialData

})


export const connectedKonva =  connect(mapStateToPropsDimentions)(Konva)
