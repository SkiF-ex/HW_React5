import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { mapState, mapDispatch } from '../../../core/maps';
import Form from '../Form/loginForm';
import login from '../../../utils/Login/login'
import withTranslation from '../../hoc/withTranslation';

class Login extends Component {

    async componentDidMount() {
        this.props.getUsersData();
    }

    loginInit = (formData) => {      
       login(formData, this.props);
    };

    render() {
        const { please_log, havent_account, go_reg } = this.props
        return (
            <div className="loginRegister">
                <h3 className="loginRegister_title">{please_log}</h3>
                <Form onSubmit={this.loginInit}/>
                <h3 className="loginRegister_footer">{havent_account}<NavLink to="/registration">{go_reg}</NavLink></h3>
            </div>
        );
    };
};

const withTranslationWords = withTranslation(['please_log', 'havent_account', 'go_reg'])

export default withTranslationWords(connect(mapState, mapDispatch)(Login));