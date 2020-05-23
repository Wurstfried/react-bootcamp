import React, { Component } from 'react'
import './Die.css'

export default class Die extends Component {
    render() {
        return (
            <span className="Die">
                <i className={`fas fa-dice-${this.props.face} ${this.props.rolling ? 'rolling' : ''}`}></i>
            </span>
        )
    }
}
