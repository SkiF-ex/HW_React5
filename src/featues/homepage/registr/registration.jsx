import React, { PureComponent }  from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { mapState, mapDispatch } from '../../../core/maps';
import Form from '../Form/loginForm';
import withTranslation from '../../hoc/withTranslation';

class Registration extends PureComponent {
    onSubmit = (formData) => {
        this.props.registr(formData)
    }

    render() {
        const { plaese_reg, have_account, go_log } = this.props
        return (
            <div className="loginRegister">
                <h3 className="loginRegister_title">{plaese_reg}</h3>
                <Form onSubmit={this.onSubmit}/>
                <h3 className="loginRegister_footer">{have_account}<NavLink to="/login">{go_log}</NavLink></h3>
            </div>
        );
    };
};

const withTranslationWords = withTranslation(['plaese_reg', 'have_account', 'go_log'])

export default withTranslationWords(connect(mapState, mapDispatch)(Registration));