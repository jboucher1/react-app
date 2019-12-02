import './TripLocationList.scss';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { map, orderBy } from 'lodash';
import { Button } from '../../components-ui';

export const TripLocationList = ({ locations }) => {
    let { path, url } = useRouteMatch();

    const moveItem = (item, index, direction) => {

        console.log(item, index, direction, url, path)
    }

    const list = map(locations, (location, i) => {
        let text = (
            <div className="column" >
                <span>{location.label}</span>
            </div>
        );

        return (
            <div className="card item row" key={location.id}>
                <div className="column move-icons">
                    <Button onClick={() => moveItem(location, i, 'up')} icon="arrow_drop_up"></Button>
                    <Button onClick="k" icon="arrow_drop_down"></Button>
                </div>
                <Button link={`${url}/location/${location.id}`} icon="arrow_forward_io" layout="row-reverse" label={text} theme="primary-icon" className="view-button flex"/>
            </div>
        )
    })

    return (
        <div className="TripLocationList flex-33 flex-100-sm">
            <Button icon="add" layout="row-reverse" link={`${url}/location/`} label="Add a location" theme="accent-icon" style={{marginBottom:'8px'}}/>
            {list}
        </div>
    );
}