import { useHistory } from 'react-router-dom';
import React from 'react';
import * as ROUTES from '../constants/routes';

export default function Welcome() {
    const history = useHistory();
    const onClick = () => {
        history.push(ROUTES.DASHBOARD);
    };

    return (
        <div>
            <button onClick={onClick}>Start</button>
        </div>
    );
}
