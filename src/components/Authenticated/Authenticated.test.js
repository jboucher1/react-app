import React from 'react';
import ReactDOM from 'react-dom';
import { Authenticated } from './Authenticated';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Authenticated />, div);
    ReactDOM.unmountComponentAtNode(div);
});