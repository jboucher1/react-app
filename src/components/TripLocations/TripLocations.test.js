import React from 'react';
import ReactDOM from 'react-dom';
import { TripLocations } from './TripLocations';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TripLocations />, div);
    ReactDOM.unmountComponentAtNode(div);
});