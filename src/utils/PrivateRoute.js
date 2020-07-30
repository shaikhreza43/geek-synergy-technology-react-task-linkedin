import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const username = localStorage.getItem('username');

export const PrivateRoute = ({ component: Component, ...rest }) => (

    <Route {...rest} render={props => (
        localStorage.getItem('username')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)