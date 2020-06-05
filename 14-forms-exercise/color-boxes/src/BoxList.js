import React, { Component } from 'react'
import NewBoxForm from './NewBoxForm'
import Box from './Box'

export default class BoxList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             boxes: []
        }

        this.addBox    = this.addBox.bind(this)
        this.removeBox = this.removeBox.bind(this)
    }

    addBox(box) {
        this.setState(state => ({
        boxes: [...state.boxes, box]
        }));
    }

    removeBox(id) {
        this.setState({
            boxes: this.state.boxes.filter(box => box.id !== id)
        });
    }

    renderBoxes() {
        return (
            <ul>
                {this.state.boxes.map(box => (
                <Box 
                    key       = {box.id}
                    id        = {box.id}
                    width     = {box.width}
                    height    = {box.height}
                    color     = {box.color}
                    removeBox = {() => this.removeBox(box.id)} />
                ))}
            </ul>
        );
    }
    
    render() {
        return (
            <div>
                <NewBoxForm createBox={this.addBox} removeBox={this.removeBox} />
                {this.renderBoxes()}
            </div>
        )
    }
}
