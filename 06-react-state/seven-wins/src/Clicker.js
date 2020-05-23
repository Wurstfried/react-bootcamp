import React, { Component } from 'react'

export class Clicker extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            num : 0
        }

        this.getRandom = this.getRandom.bind(this)
    }

    getRandom() {
        let rand = Math.floor(Math.random() * 10) + 1
        this.setState({num: rand, isWinner: rand === 7})
    }

    render() {

        let btn
        if (this.state.isWinner) {
            btn = <h2>You Win!</h2>
        } else {
            btn = <button onClick={this.getRandom}>Random Number</button>;
        }
        
        return (
            <div>
                <h1>{this.state.num}</h1>
                {btn}
            </div>
        )
    }
}

export default Clicker
