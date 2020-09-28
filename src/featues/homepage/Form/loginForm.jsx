import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import withTranslation from '../../hoc/withTranslation';

class Form extends PureComponent {
    render() {
        const {enter_name, enter_password} = this.props;
        return (
            <form className="loginRegister_form" onSubmit={this.props.handleSubmit}>
                <Field
                    name="name"
                    component="input"
                    type="text"
                    placeholder={enter_name}
                    className="loginRegister_input"
                >
                </Field>
                <Field
                    name="password"
                    component="input"
                    type="password"
                    placeholder={enter_password}
                    className="loginRegister_input"
                >
                </Field>
                <input value="Submit" type="submit" className="loginRegister_button"/>
            </form>
        );
    };
};
const withTranslationWords = withTranslation(['enter_name', 'enter_password', 'submit']);

export default withTranslationWords(reduxForm({form: 'login'})(Form));