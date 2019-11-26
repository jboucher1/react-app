import React from 'react';
import ReactDOM from 'react-dom';
import { UnAuthenticated } from './UnAuthenticated';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UnAuthenticated />, div);
    ReactDOM.unmountComponentAtNode(div);
});