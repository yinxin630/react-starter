import React, { Component } from 'react';
import Hello from './components/Hello';

// App can't be stateless component
export default class App extends Component {
    render() {
        return (
            <div>
                <Hello />
                <div>App</div>
            </div>
        );
    }
}
