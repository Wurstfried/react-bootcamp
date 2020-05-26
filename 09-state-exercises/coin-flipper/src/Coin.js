import React, { Component } from 'react'
import './Coin.css'

export default class Coin extends Component {
    render() {
        return (
            <div className="coin">
                <img src={this.props.side} alt=""></img>
            </div>
        )
    }
}
