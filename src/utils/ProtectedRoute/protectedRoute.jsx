import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { mapState } from '../../core/maps';

function ProtectedRoute(props) {
    return !!props.isLogined ? <Route {...props} /> : <Redirect to="/login" />
};

export default connect(mapState)(ProtectedRoute);