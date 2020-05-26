import React, { Component } from 'react'
import Square from './Square'
import './Raster.css'

export default class Raster extends Component {
    static defaultProps = {
        colors: ['salmon', 'teal', 'orange', 'red']
    }

    render() {
        const squares = Array.from({length: 18}).map(
            () => <Square colors={this.props.colors}/>
        )

        return (
            <div className="raster">
                {squares}
            </div>
        )
    }
}
