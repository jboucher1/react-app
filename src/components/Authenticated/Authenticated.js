import './Authenticated.scss';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Topbar, Dashboard, UserList } from '../';

export class Authenticated extends Component {
    state = {
        theme: 'light-theme'
    }

    changeTheme = (e) => {
        const  theme  = this.state.theme === 'light-theme' ? 'dark-theme' : 'light-theme';
        this.setState({theme})
        document.getElementById('root').classList.remove('light-theme')
        document.getElementById('root').classList.remove('dark-theme')
        document.getElementById('root').classList.add(this.state.theme)
        console.log(document.getElementById('root').classList, document.getElementById('root').classList.contains('light-theme'))
    }

    render() {
        return (
            <BrowserRouter>
            <div className="Authenticated primary-topbar-background">
                    <Topbar changeTheme={this.changeTheme}/>
                    <div className="view container">
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/users" component={ UserList } />
                    </div>
                    
                </div>
            </BrowserRouter>
            );
    }
}