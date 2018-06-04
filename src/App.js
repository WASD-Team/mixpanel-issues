import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import mixpanel from 'mixpanel-browser';

function debug(...args) {
    console.info('DEBUG:', ...args);
}

class App extends Component {
    render() {
        debug(mixpanel.init('YOUR_TRACKING_ID', { debug: true, api_host: 'https://api.mixpanel.com' }));
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
