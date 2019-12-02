import './Trips.scss';
import React, { Component } from 'react';
import { Button } from '../../components-ui';
import { TripsList } from '../'
import { sortBy } from 'lodash';

export class Trips extends Component {

    state = {
        trips: [
            {
                id: 1,
                name: 'Brisbane',
                vehicle: 1,
                locations: [1, 2, 3],
                date: new Date('2019-12-05T19:55:02.266Z')
            },
            {
                id: 2,
                name: 'Athens',
                vehicle: 1,
                locations: [1, 2, 3],
                date: new Date('2019-12-03T19:55:02.266Z')
            },
            {
                id: 3,
                name: 'Cde',
                vehicle: 1,
                locations: [1, 2, 3],
                date: new Date()
            }
        ],
        sortBy: 'date',
    };

    setDate = () => {
        let sortBy = this.state.sortBy === 'date' ? '-date' : 'date';
        this.setState({ sortBy })
    }

    render() {
        return (
            <div className="Trips">
                <div className="row align-end-center">
                    <Button icon={this.state.sortBy === 'date' ? 'arrow_downward' : 'arrow_upward'} layout="row-reverse" onClick={this.setDate} label="Date" theme="primary-flat" style={{ marginRight:'16px' }} />
                    <Button icon="add" layout="row-reverse" link="/trip/" label="Add a trip" theme="accent-icon" />
                </div>

                <TripsList trips={sortBy(this.state.trips, [this.state.sortBy])} />
            </div>
        );
    }
}