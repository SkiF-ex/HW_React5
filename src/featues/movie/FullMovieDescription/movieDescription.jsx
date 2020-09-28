import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { mapState, mapDispatch } from '../../../core/maps';
import starCount from '../../../utils/starCount/stars';
import currentActors from '../../../utils/CurrentActors/currentActors';
import LogoutButton from '../../../utils/logoutButton/logoutButton';
import withTranslation from '../../hoc/withTranslation';
import selectActor from '../../../utils/SelectActor/selectActor';

class ClassComponent extends Component {

    selectActorInit = (event) => {
        selectActor(event, this.props);
    };

    deleteData = () => {
        const targetId = this.props.selectedMovie.id;

        this.props.deleteData(targetId);
    };
    
    render() {
        const block = this.props.selectedMovie;
        const {director, genres, desctiprion, likes, editButton, deleteButton, backButton, actors} = this.props
        if (block.length !== 0) {
            return (
                <>
                    <LogoutButton />
                    <div className="container">
                        <div className="row">
                            <div className="homepage_right-block">
                                <div className="homepage_right-block-rating">
                                    <h4 id={block.id} className="homepage_right-block-rating-title">{block.title}</h4>
                                    <h4 className="homepage_right-block-rating-likes">{likes}: {block.likes}</h4>
                                    <div className={starCount(block.stars) + " homepage_right-block-rating-stars"}></div>
                                    <br></br>
                                    <div className="homepage_buttons">
                                        <NavLink to="/editor"><button className="homepage_buttons-element">{editButton}</button></NavLink>
                                        <NavLink to="/movies"><button onClick={this.deleteData} className="homepage_buttons-element">{deleteButton}</button></NavLink>
                                        <button onClick={this.props.back} className="homepage_buttons-element">{backButton}</button>
                                    </div>
                                </div>
                                <div className="homepage_right-block-details">
                                    <img alt="posterImg" className="homepage_right-block-details-image" src={block.posterUrl}/>
                                    <h4 className="homepage_right-block-details-director"><b>{director}:</b> {block.director}</h4>
                                    <h4 className="homepage_right-block-details-actors"><b>{actors}:</b> {
                                        currentActors(block, this.props.allActors).map((el, i) => (<NavLink onClick={this.selectActorInit} to="/actor" key={i}>{el + ' '}</NavLink>))}
                                    </h4>
                                    <h4 className="homepage_right-block-details-genres"><b>{genres}:</b> {
                                        block.genres.map((el) => (el + '. '))}
                                    </h4>
                                    <h4 className="homepage_right-block-details-description"><b>{desctiprion}:</b> {block.description}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        };
        return <Redirect to="/movies"/>;
    };
};

const withTranslationWords = withTranslation(['director', 'genres', 'desctiprion', 'likes', 'editButton', 'deleteButton', 'backButton', 'actors'])

export default withTranslationWords(connect(mapState, mapDispatch)(ClassComponent));