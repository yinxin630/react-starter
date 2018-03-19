import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

const render = (Component) => {
    ReactDom.render(
        <Component />,
        document.getElementById('app'),
    );
};
render(App);
