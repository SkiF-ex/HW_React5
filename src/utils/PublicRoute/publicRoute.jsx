import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { mapState } from '../../core/maps';

function PublicRoute(props) {
    return !props.isLogined ? <Route {...props} /> : <Redirect to="/movies" />
};

export default connect(mapState)(PublicRoute);