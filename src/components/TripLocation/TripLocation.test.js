import React from 'react';
import ReactDOM from 'react-dom';
import { TripLocation } from './TripLocation';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TripLocation />, div);
    ReactDOM.unmountComponentAtNode(div);
});