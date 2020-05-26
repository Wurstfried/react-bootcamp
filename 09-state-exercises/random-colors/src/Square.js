import React, { Component } from 'react'
import './Square.css'

export default class Square extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             color: this.props.colors[Math.floor(Math.random() * this.props.colors.length)]
        }

        this.getColor = this.getColor.bind(this)
    }
    
    getColor() {
        let col

        do {
            col = this.props.colors[Math.floor(Math.random() * this.props.colors.length)]
        } while (this.state.color === col);
        this.setState({"color": col})
        return col
    }

    render() {
        return (
            <div onClick={this.getColor} className='square' style={{background: this.state.color}} />
        )
    }
}
