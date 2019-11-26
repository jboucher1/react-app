import './App.scss';
import React, { Component } from 'react';
import { Authenticated, UnAuthenticated } from '../';

export class App extends Component {
    render() {
        return (
            <div className="App">
                <Authenticated />
            <UnAuthenticated />
            </div>
            
        );
    }
}