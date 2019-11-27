import './Trips.scss';
import React, { Component } from 'react';
import { Button } from '../../components-ui';
import { TripsList } from '../'

export class Trips extends Component {

    state = {
        trips: [
            {
                id:1,
                name:'Brisbane',
                vehicle: 1,
                locations: [1,2,3],
                date: new Date().toISOString()
            }
        ]
    }
    render() {
        return (
            <div className="Trips">
                <Button icon="add" layout="row" link="/trip/edit" label="Add a trip" theme="accent-icon"/>
                <TripsList trips={this.state.trips}/>
            </div>
        );
    }
}