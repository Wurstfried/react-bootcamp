import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'

export class TodoList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todos: []
        }

        this.create = this.create.bind(this)
        this.remove = this.remove.bind(this)
        this.update = this.update.bind(this)
    }

    create(todo) {
        this.setState(state => ({
        todos: [...state.todos, todo]
        }));
    }
    
    remove(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    }

    update(id, updatedTask) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return({...todo, todo: updatedTask})
            }
            return todo
        })
        this.setState({
            todos: updatedTodos
        });
    }

    renderTodos() {
        return(
            <ul>
                {this.state.todos.map(todo => (
                    <Todo
                        todo = {todo.todo}
                        key  = {todo.id}
                        id   = {todo.id}
                        removeTodo = { () => this.remove(todo.id)}
                        updateTodo = { this.update }
                    />
                ))}
            </ul>
        )
    }

    render() {
        return (
            <div>
                ToDo List
                {this.renderTodos() }
                <NewTodoForm addTodo={this.create} removeTodo={this.remove}/>
            </div>
        )
    }
}

export default TodoList
