import './Button.scss';
import React from 'react';
import MaterialIcon from 'material-icons-react';
import { NavLink } from 'react-router-dom'


// Themes:
// primary, primary-flat, primary-raised, primary-icon, primary-icon-border

export const Button = ({ icon, size = 32, layout = 'row', link, label, theme = 'flat', onClick, href, className}) => {

    const style = {
        fontSize: `${size / 2.5}px`,
        padding: '8px',
        fontWeight: 'bold'
    }

    const _layout = `Button ${className ? className: ''} flex-layout-${layout} align-center-center `;
    const materialicon = icon ? (<MaterialIcon icon={icon} size={size} />) : null;
    const textlabel = label ? (<span className="text" style={style} >{label}</span>) : null;

    const _link = (
        <NavLink className={_layout + theme + '-button'} to={link}>
            {materialicon}
            {textlabel}
        </NavLink>
    );

    const _onClick = (
        <a className={_layout + theme + '-button'} onClick={onClick}>
            {materialicon}
            {textlabel}
        </a>
    );

    const _href = (
        <a className={_layout + theme + '-button'} href={href}>
            {materialicon}
            {textlabel}
        </a>
    );

    const type = () => {

        if(link){
            return _link
        };

        if(onClick){
            return _onClick
        };

        if(href){
            return _href
        };

        return (<span>No click src found, please specify link, onClick, href</span>);

    }

    return type();
}