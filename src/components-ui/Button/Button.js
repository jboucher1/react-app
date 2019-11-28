import './Button.scss';
import React from 'react';
import MaterialIcon from 'material-icons-react';
import { NavLink } from 'react-router-dom'


// Themes:
// primary, primary-flat, primary-raised, primary-icon, primary-icon-border

export const Button = ({ icon, size = 32, layout = 'row', link, label, theme = 'primary', onClick, href, className}) => {

    const style = {
        fontSize: `${size / 2.5}px`,
        padding: '8px',
        fontWeight: 'bold'
    }

    const _layout = `Button ${className ? className: ''} ${layout} align-center-center `;
    const materialicon = icon ? (<MaterialIcon icon={icon} size={size} />) : null;
    const textlabel = label ? (<span className="text" style={style} >{label}</span>) : null;


    const type = () => {

        if(link){
            return (
                <NavLink className={_layout + theme + '-button'} to={link}>
                    {materialicon}
                    {textlabel}
                </NavLink>
            );
        };

        if(onClick){
            return (
                <a className={_layout + theme + '-button'} onClick={onClick}>
                    {materialicon}
                    {textlabel}
                </a>
            );
        };

        if(href){
            return (
                <a className={_layout + theme + '-button'} href={href}>
                    {materialicon}
                    {textlabel}
                </a>
            );
        };

        return (<span>No click src found, please specify link, onClick, href</span>);

    }

    return type();
}