import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { mapDispatch, mapState } from '../../../core/maps';
import withTranslation from '../../hoc/withTranslation';

class EditorForm extends PureComponent {
    render() {
        const block = this.props.selectedMovie;
        const { title, director, genres, desctiprion, img_url, go_back} = this.props;

        return (
            <form className="editor" onSubmit={this.props.handleSubmit}>
                <div className="editor_block">
                    <h3 className="editor_block-title">{title}</h3>
                    <Field
                        name="title"
                        component="input"
                        type="text"
                        className="editor_block-input"
                        value={block.title}
                    >
                    </Field>
                </div>
                <div className="editor_block">
                    <h3 className="editor_block-title">{img_url}</h3>
                    <Field
                        name="imgUrl"
                        component="input"
                        type="text"
                        className="editor_block-input"
                        value={block.posterUrl}
                    >
                    </Field>
                </div>
                <div className="editor_block">
                    <h3 className="editor_block-title">{director}</h3>
                    <Field
                        name="director"
                        component="input"
                        type="text"
                        className="editor_block-input"
                        value={block.director}
                    >
                    </Field>
                </div>
                <div className="editor_block">
                    <h3 className="editor_block-title">{genres}</h3>
                    <Field
                        name="genres"
                        component="input"
                        type="text"
                        className="editor_block-input"
                        value={block.genres}
                    >
                    </Field>
                </div>
                <div className="editor_block">
                    <h3 className="editor_block-title">{desctiprion}</h3>
                    <Field
                        name="description"
                        component="textarea"
                        type="text"
                        className="editor_block-textarea"
                        value={block.description}
                    >
                    </Field>
                </div>
                <div>
                    <input value="Submit" type="submit" className="editor_block-buttons-element"/>
                    <NavLink to="/movies"><button className="homepage_buttons-element">{go_back}</button></NavLink>
                </div>
            </form>
        );
    };
};
const withTranslationWords = withTranslation(['title', 'director', 'genres', 'desctiprion', 'img_url', 'go_back']);

export default withTranslationWords(connect(mapState, mapDispatch)(reduxForm({form: 'editor'})(EditorForm)));