import React from 'react';
import ReactDOM from 'react-dom';
import { TripLocationList } from './TripLocationList';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TripLocationList />, div);
    ReactDOM.unmountComponentAtNode(div);
});