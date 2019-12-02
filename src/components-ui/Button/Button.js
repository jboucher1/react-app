import './Button.scss';
import React from 'react';
import { NavLink } from 'react-router-dom'


// Themes:
// primary, primary-flat, primary-raised, primary-icon, primary-icon-border

export const Button = ({ icon, size = 32, layout = 'row', link, label, theme = 'primary', onClick, href, className, style}) => {

    const labelstyle = {
        fontSize: `${size / 2.5}px`,
        padding: '8px',
        fontWeight: 'bold',
        width:'100%'
    }

    const _layout = `Button ${className ? className: ''} ${layout} align-center-center `;
    const textlabel = label ? (<span className="text" style={labelstyle} >{label}</span>) : null;
    const materialicon = icon ? <i className={`material-icons icon-${size} md-dark`}>{icon}</i> : null;

    const type = () => {
        

        if(link){  
            return (
                <NavLink className={_layout + theme + '-button'} to={link} style={style}>
                    {materialicon}
                    {textlabel}
                </NavLink>
            );
        };

        if(onClick){
            return (
                <div className={_layout + theme + '-button'} onClick={onClick} style={style}>
                    {materialicon}
                    {textlabel}
                </div>  
            );
        };

        if(href){
            return (
                <a className={_layout + theme + '-button'} href={href} style={style}>
                    {materialicon}
                    {textlabel}
                </a>
            );
        };

        return (<span>No click src found, please specify link, onClick, href</span>);

    }

    return type();
    

    
}