import './Authenticated.scss';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Topbar, Trips, Trip, Theme, Logout, Vehicles } from '../';

export class Authenticated extends Component {  
    render() {
        return (
            <Router>
            <div className="Authenticated primary-topbar-background column">
                    <Topbar/>
                    <div className="view container flex scroll">
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