import React from 'react';
import ReactDOM from 'react-dom';
import { Theme } from './Theme';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Theme />, div);
    ReactDOM.unmountComponentAtNode(div);
});