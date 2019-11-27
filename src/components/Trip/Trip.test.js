import React from 'react';
import ReactDOM from 'react-dom';
import { Trip } from './Trip';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Trip />, div);
    ReactDOM.unmountComponentAtNode(div);
});