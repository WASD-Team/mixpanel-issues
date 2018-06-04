import React, { Component } from 'react';
import mixpanel from 'mixpanel-browser';

import './App.css';
import logo from './logo.svg';
import config from '../config';

function debug(...args) {
    console.info('DEBUG:', ...args);
}

console.log(config);
class App extends Component {
    render() {
        debug(mixpanel.init(config.mixpanel.id, config.mixpanel.options));
        debug(mixpanel.track('An event'));

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
