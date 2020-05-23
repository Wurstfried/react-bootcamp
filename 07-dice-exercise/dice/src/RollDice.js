import React, { Component } from 'react'
import Die from './Die'

export default class RollDice extends Component {
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    }

    constructor(props) {
        super(props)
    
        this.state = {
             die1   : 'one',
             die2   : 'one',
             rolling: false
        }

        this.roll = this.roll.bind(this)
    }
    

    roll() {
        this.setState({
            die1: this.props.sides[Math.floor(Math.random() * this.props.sides.length)],
            die2: this.props.sides[Math.floor(Math.random() * this.props.sides.length)],
            rolling: true
        })

        setTimeout(() => {
            this.setState({
                rolling: false
            })
        }, 1000)
    }

    render() {
        return (
            <div>
                <div>
                    <Die face={this.state.die1} rolling={this.state.rolling}/>
                    <Die face={this.state.die2} rolling={this.state.rolling}/>
                </div>
                <button onClick={this.roll} disabled={this.state.rolling}>
                    {this.state.rolling ? 'Rolling ...' : 'Roll Dice!'}
                </button>
            </div>
        )
    }
}
