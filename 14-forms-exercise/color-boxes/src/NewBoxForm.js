import React, { Component } from 'react'
import { v4 as uuid } from 'uuid';

export default class NewBoxForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = { width: "", height: "", color: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        const newBox = { ...this.state, id: uuid() }
        console.log(newBox);
        
        this.props.createBox(newBox);
        this.setState({ width: "", height: "", color: ""});
    }
    
    handleChange(evt) {
        this.setState({
        [evt.target.name]: evt.target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='width'>Width: </label>
                    <input
                    id       = 'width'
                    name     = 'width'
                    value    = {this.state.width}
                    onChange = {this.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='height'>Height: </label>
                    <input
                    id       = 'height'
                    name     = 'height'
                    value    = {this.state.height}
                    onChange = {this.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='color'>Color: </label>
                    <input
                    id       = 'color'
                    name     = 'color'
                    value    = {this.state.color}
                    onChange = {this.handleChange}
                    />
                </div>
                <button>Add Box!</button>
            </form>
        )
    }
}
