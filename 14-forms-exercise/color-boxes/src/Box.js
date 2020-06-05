import React, { Component } from 'react'

export default class Box extends Component {
    render() {
        return (
            <div className="Box">
                <div  style={{
                    width     : `${this.props.width}em`,
                    height    : `${this.props.height}em`,
                    background: `#${this.props.color}`
                }} />
                <button onClick={this.props.removeBox}>X</button>
            </div>
        )
    }
}
