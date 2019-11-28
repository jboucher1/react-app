import './Topbar.scss';
import React from 'react';
import { Button } from '../../components-ui';

export const Topbar = () => {
        return (
            <div className="Topbar container row wrap align-start-center primary-background-color">
                <span className="hide-sm">TRIPS!</span>
                <span className="flex"></span>
                <Button icon="color_lens" layout="row" link="/theme" label="Theme" theme="primary-flat" className="hide-button-text-sm"/>
                <Button icon="location_city" layout="row" link="/trips" label="Trips" theme="primary-flat" className="hide-button-text-sm"/>
                <Button icon="directions_car" layout="row" link="/vehicles" label="Vehicles" theme="primary-flat" className="hide-button-text-sm"/>
                <Button icon="input" layout="row" link="/logout" label="Log out" theme="primary-flat" className="hide-button-text-sm"/>
            </div>
        );
}