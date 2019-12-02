import './TripsList.scss';
import React from 'react';
import { Link } from 'react-router-dom'

export const TripsList = ({trips}) => {
    console.log(trips)
    const list = trips.map((trip) => {
        return (
            <Link className="item row align-start-center card" key={trip.id} to={`/trip/${trip.id}`} >
                <div className="column align-center-start flex">
                    <span className="flex">{trip.name}</span>
                    <span className="flex">{trip.date.toString()}</span>
                </div>
                
                <i className="material-icons icon-32">arrow_forward_ios</i>
            </Link>
        )
    })
        return (
            <div className="TripsList">
                {list}
            </div>
        );
}