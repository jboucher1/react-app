import './Authenticated.scss';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Topbar, Trips, Trip, Theme, Logout, Vehicles } from '../';

export class Authenticated extends Component {
    state = {
        theme: 'light-theme'
    }

    changeTheme = (e) => {
        const  theme  = this.state.theme === 'light-theme' ? 'dark-theme' : 'light-theme';
        this.setState({theme})
        document.getElementById('root').classList.remove('light-theme')
        document.getElementById('root').classList.remove('dark-theme')
        document.getElementById('root').classList.add(this.state.theme)
        console.log(document.getElementById('root').classList, document.getElementById('root').classList.contains('light-theme'))
    }

    render() {
        return (
            <Router>
            <div className="Authenticated primary-topbar-background">
                    <Topbar changeTheme={this.changeTheme}/>
                    <div className="view container">
                        <Switch>
                            <Redirect exact from="/" to="/trips" />
                            <Route exact path="/trips" component={ Trips } />
                            <Route exact path="/trip" component={ Trip } />
                            <Route path="/theme" component={ Theme } />
                            <Route path="/logout" component={ Logout  } />
                            <Route path="/vehicles" component={ Vehicles  } />
                        </Switch>
                    </div>
                    
                </div>
            </Router>
            );
    }
}