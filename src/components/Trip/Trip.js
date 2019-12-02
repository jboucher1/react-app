import './Trip.scss';
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { TripLocationList, TripLocation, TripLocations } from '../';

export class Trip extends Component {
    render() {
        const { id } = this.props.match.params;
        const {path, url} = this.props.match;
       
        const locations = [
            {
                id:3,
                trip:id,
                label:'Jess House 3',
                location:'',
                order:2
            },
            {
                id:1,
                trip:id,
                label:'Jess House 1',
                location:'',
                order:0
            },
            {
                id:2,
                trip:id,
                label:'Jess House 2',
                location:'',
                order:1
            }
     

        ]
        console.log(this.props)
        return (
            <div className="Trip row">
                <TripLocationList locations={locations}/>
                <Switch>
                    <Route exact path={`${url}`} component={ TripLocations } />
                    <Route path={`${path}/location/:id?`} component={ TripLocation } />
                </Switch>
            </div>
        );
    }
}