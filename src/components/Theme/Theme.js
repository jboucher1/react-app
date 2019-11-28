import './Theme.scss';
import React, { Component } from 'react';
import { Topbar } from '../';
import { Button } from '../../components-ui';

export class Theme extends Component {
    state = {
        themes: ['blue-light', 'blue-dark', 'pink-light', 'pink-dark', 'purple-light', 'purple-dark','mint-dark'],
        currentTheme: 'light'
    }

    themeElement = document.getElementById('root')

    selectTheme = (theme) => {

        this.themeElement.classList = '';
        this.themeElement.classList.add(`${theme}-theme`)
    }

    themeTemplate = this.state.themes.map((theme, index) => {
        return (
            <div className={`flex-25 flex-100-sm flex-33-md ${theme}-theme-examples item`} key={index}>
                
                <div className="theme-card background-background">
                    <Topbar />
                    <Button className="card foreground-background" onClick={() => this.selectTheme(theme)} icon="done" theme="accent" layout="column" label="Select Theme" />
                        
                </div>
            </div>
        )
    })

    render() {
        return (
            <div className="Theme row wrap">
                {this.themeTemplate}
            </div>
        );
    }
}