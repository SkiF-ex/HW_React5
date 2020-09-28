import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { mapState, mapDispatch } from '../../core/maps';
import axios from 'axios';
import withTranslation from '../../featues/hoc/withTranslation';

class Logout extends Component {
    render() {
        const {log_out} = this.props;
        const logout = async () => {
            await axios.put('http://localhost:3000/isLogin', {
                "log": false
            });
            this.props.getDataIsLogin();
        };

        return(
            <button onClick={logout} className="logout-button">{log_out}</button>
        );
    };
};

const withTranslationWords = withTranslation(['log_out']);

export default withTranslationWords(connect(mapState, mapDispatch)(Logout));