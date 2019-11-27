import React from 'react';
import ReactDOM from 'react-dom';
import { TripsList } from './TripsList';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TripsList />, div);
    ReactDOM.unmountComponentAtNode(div);
});