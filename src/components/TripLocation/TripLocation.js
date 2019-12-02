import './TripLocation.scss';
import React, { Component } from 'react';

export class TripLocation extends Component {
    render() {
        const { id } = this.props.match.params;

        return (
            <div className="TripLocation">
                <p>TripLocation works! {id}</p>
            </div>
        );
    }
}