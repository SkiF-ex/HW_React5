import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { mapState, mapDispatch } from '../../../core/maps';
import MiniMovieHTML from '../../movie/MiniMovieDescription/movieDescription';
import Footer from '../Footer/footer';
import LogoutButton from '../../../utils/logoutButton/logoutButton';
import withTranslation from '../../hoc/withTranslation';
import sortByLikes from '../../../utils/sortBy/sortByLikes';
import sortByStars from '../../../utils/sortBy/sortByStars';

class LeftBlockHTML extends Component {

    sortByLikesInit = () => {
        sortByLikes(this.props);
    };

    sortByStarsInit = () => {
        sortByStars(this.props);
    };

    searchByName = () => {
        const input = document.getElementById('searchInput');

        this.props.searchByName(input);
    };

    searchReset = () => {
        document.getElementById('searchInput').value = '';

        this.props.searchReset();
    };

    render() {
        const { sort_title, by_likes, by_rating, search, reset, search_placeholder} = this.props;
    
        return (
            <>
                <LogoutButton />
                <div className="container">
                    <div className="row">
                        <div className="homepage_left-block">
                            <div className="homepage_left-block-filters">
                                <div className="homepage_left-block-filters-item">
                                    <h4 className="homepage_left-block-filters-item-title">{sort_title}</h4>
                                </div>
                                <div className="homepage_left-block-filters-item">
                                    <button onClick={this.sortByLikesInit} className="homepage_left-block-filters-item-button">{by_likes}</button>
                                    <button onClick={this.sortByStarsInit} className="homepage_left-block-filters-item-button">{by_rating}</button>
                                </div>
                                <div className="homepage_left-block-filters-item">
                                    <input id="searchInput" className="homepage_left-block-filters-item-input" placeholder={search_placeholder}/>
                                    <button onClick={this.searchByName} className="homepage_left-block-filters-item-search">{search}</button>
                                    <button onClick={this.searchReset} className="homepage_left-block-filters-item-reset">{reset}</button>
                                </div>
                            </div>
                            <div id="movieContainer" className="movieContainer">
                                <MiniMovieHTML />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    };
};

const withTranslationWords = withTranslation(['sort_title', 'by_likes', 'by_rating', 'reset', 'search', 'search_placeholder']);

export default withTranslationWords(connect(mapState, mapDispatch)(LeftBlockHTML));