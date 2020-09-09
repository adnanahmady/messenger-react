import React, { Component } from 'react';
import auth from './../services/auth';

export default class Logout extends Component {
    componentDidMount() {
        auth.logout();

        window.location = '/';
    }

    render() {
        return ( null );
    }
}