import React, { Component } from 'react'
import { TodoPage } from './containers/todoPage'

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>React + Redux Todo Demo</h1>
                </header>
                <div>
                    <TodoPage />
                </div>
            </div>
        )
    }
}