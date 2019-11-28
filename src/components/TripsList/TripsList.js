import './TripsList.scss';
import React from 'react';
import { Button } from '../../components-ui';

export const TripsList = ({trips}) => {
    console.log(trips)
    const list = trips.map((trip) => {
        return (
            <div className="item row align-start-center" key={trip.id}>
                <span className="flex">{trip.name}</span>
                <Button link={`/trip/${trip.id}`} icon="arrow_forward_ios" />
            </div>
        )
    })
        return (
            <div className="TripsList card">
                {list}
            </div>
        );
}