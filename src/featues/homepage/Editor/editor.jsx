import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { mapState, mapDispatch } from '../../../core/maps';
import Footer from '../Footer/footer';
import LogoutButton from '../../../utils/logoutButton/logoutButton';
import EditorFrom from './editorForm';

class Editor extends Component {
    goEdit = (formData) => {
        this.props.editMovie(formData, this.props.selectedMovie);
    };

    render() {
        const block = this.props.selectedMovie;
        if (block.length !== 0) {
            return (
                <>
                    <LogoutButton />
                    <EditorFrom onSubmit={this.goEdit}/>
                    <Footer />
                </>
            );
        };
        return <Redirect to="/movies"/>;
    };
};

export default connect(mapState, mapDispatch)(Editor);