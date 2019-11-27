import './Topbar.scss';
import React from 'react';
import { Button } from '../../components-ui';

export const Topbar = () => {
        return (
            <div className="Topbar flex-layout-row wrap align-start-center container primary-background-color">
                <span>TRIPS!</span>
                <span className="flex"></span>
                <Button icon="color_lens" layout="row" link="/theme" label="Theme" theme="primary-flat"/>
                <Button icon="location_city" layout="row" link="/trips" label="Trips" theme="primary-flat"/>
                <Button icon="directions_car" layout="row" link="/vehicles" label="Vehicles" theme="primary-flat"/>
                <Button icon="person" layout="row" link="/logout" label="Log out" theme="primary-flat"/>
            </div>
        );
}