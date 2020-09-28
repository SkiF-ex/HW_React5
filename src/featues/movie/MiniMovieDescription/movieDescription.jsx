import React, { Component } from 'react';
import { mapState, mapDispatch } from '../../../core/maps';
import { connect } from 'react-redux';
import starCount from '../../../utils/starCount/stars.jsx';
import { NavLink } from 'react-router-dom';
import withTranslation from '../../hoc/withTranslation';
import selectMovie from '../../../utils/SelectMovie/selectMovie';

class MiniMovieHTML extends Component {
    selectMovieInit = (event) => {
        selectMovie(event, this.props);
    };

    render() {
        const movieArray = this.props.currentFilms;
        const {likes} = this.props;

        if (movieArray.length !== 0) {
            if (movieArray.length !== 0) {
                return (
                    movieArray.map(element => {
                        return (
                            <div key={element.id} className="movieBlock">
                                <div className="movieBlock_likeDescriptionContainer">
                                    <div className="movieBlock_likeBlock">
                                        <button className="movieBlock_likeBlock-like"></button>
                                        <button className="movieBlock_likeBlock-dislike"></button>
                                        <h4 className="movieBlock_likeBlock-likes">{likes}</h4>
                                        <h4 className="movieBlock_likeBlock-likeCounter">{element.likes}</h4>
                                    </div>
                                    <div className="movieBlock_descriptionBlock">
                                        <div className="titleContainer">
                                        <NavLink to="/description"><h3 onClick={this.selectMovieInit} className="movieBlock_descriptionBlock-title">{element.title}</h3></NavLink>
                                        </div>
                                        <div className="imgContainer">
                                            <img alt="posterImg" src={element.posterUrl} className="movieBlock_descriptionBlock-image"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="movieBlock_rating">
                                    <div className={starCount(element.stars) + " movieBlock_rating-stars"}></div>
                                </div>
                            </div>
                        );
                    })
                );
            };
        };
        return <div></div>;
    };
};

const withTranslationWords = withTranslation(['likes']);

export default withTranslationWords(connect(mapState, mapDispatch)(MiniMovieHTML));