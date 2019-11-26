import './Topbar.scss';
import React from 'react';
import { Button } from '../../components-ui';

export const Topbar = ({changeTheme}) => {
        return (
            <div className="Topbar flex-layout-row wrap align-start-center container primary-background-color">
                <span>Logo</span>
                <span className="flex"></span>
                <Button icon="speed" layout="row" onClick={changeTheme} label="Theme" theme="primary-flat"/>
                <Button icon="speed" layout="row" link="/dashboard" label="Dashboard" theme="primary-flat"/>
                {/* <Button icon="person" layout="row" link="/users" label="Users" theme="primary-flat"/> */}
            </div>
        );
}