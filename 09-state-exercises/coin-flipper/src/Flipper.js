import React, { Component } from 'react'
import Coin from './Coin'

export default class Flipper extends Component {
    static defaultProps = {
        sides: ["https://tinyurl.com/react-coin-heads-jpg", "https://upload.wikimedia.org/wikipedia/commons/2/2d/US_50_Cent_Rev.png"]
    }

    constructor(props) {
        super(props)
    
        this.state = {
             heads: 0,
             tails: 0,
             side: 2
        }

        this.flip = this.flip.bind(this)
    }

    flip() {
        let rand = Math.floor(Math.random() * 2)
        this.setState({"side": rand})
        if (rand === 0) {
            this.setState({"heads": ++this.state.heads})
        } else {
            this.setState({"tails": ++this.state.tails})
        }
    }
    
    render() {
        return (
            <div>
                <Coin side={this.props.sides[this.state.side]} />
                <p>Heads: {this.state.heads} Tails: {this.state.tails}</p>
                <button onClick={this.flip}>Flip!</button>
            </div>
        )
    }
}
