import React, { Component } from 'react';

import '../styles/hello.less';

export default class Hello extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            color: 'red',
        };
    }
    render() {
        return (
            <div className="hello">Hello.jsx</div>
        );
    }
}
