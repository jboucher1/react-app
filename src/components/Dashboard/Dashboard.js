import './Dashboard.scss';
import React, { Component } from 'react';
import { Button } from '../../components-ui';

export class Dashboard extends Component {
    render() {
        return (
            <div className="Dashboard flex-layout-row wrap">
                <div className="navigation flex-layout-row wrap align-center-start card">
           
                    
                    <Button icon="view_module" layout="column" link="/apps" label="Apps" theme="primary-icon-border"/>
                    <Button icon="person" layout="column" link="/users" label="Users" theme="primary-icon-border"/>
                    <Button icon="assessment" layout="column" link="/todo" label="Summary" theme="primary-icon-border"/>
                    <Button icon="description" layout="column" link="/todo" label="Reports" theme="primary-icon-border"/>
                    <Button icon="speed" layout="column" link="/todo" label="Components" theme="primary-icon-border"/>
                    <Button icon="speed" layout="column" link="/todo" label="Components" theme="primary-icon-border"/>
                </div>
                <div className="flex flex-layout-row wrap align-center-center card">
                    
                </div>
            </div>
        );
    }
}