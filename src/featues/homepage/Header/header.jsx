import React from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import HomepageStripHorizontal from '../../../utils/HomepageStripHorizontal/horizontal';
import Login from '../login/login';
import LeftBlockHTML from '../LeftBlock/leftBlock';
import Registration from '../registr/registration';
import Editor from '../Editor/editor';
import ClassComponent from '../../movie/FullMovieDescription/movieDescription';
import Actor from '../Actor/actor';
import ProtectedRoute from '../../../utils/ProtectedRoute/protectedRoute';
import PublicRoute from '../../../utils/PublicRoute/publicRoute';
import withTranslation from '../../hoc/withTranslation';
import { connect } from 'react-redux';
import { mapState } from '../../../core/maps';

const HomepageHeader = (props) => {
    const {header_title} = props;

    const changeLang = (lang) => () => {
        localStorage.setItem('selectedLanguage', lang);
        window.location.reload(true);
    }

    return (
        <>
            <header className="header">
                <button className="header-title"><b>{header_title}</b></button>
                <div>
                    <button className="header_changeLanguageButton" onClick={changeLang('ukr')}>Українська</button>
                    <button className="header_changeLanguageButton" onClick={changeLang('eng')}>English</button>
                </div>
                <HomepageStripHorizontal />
            </header>
            <BrowserRouter>
                <Switch>
                    <ProtectedRoute path="/movies" component={LeftBlockHTML}/>
                    <ProtectedRoute path="/description" component={ClassComponent}/>
                    <ProtectedRoute path="/actor" component={Actor}/>
                    <ProtectedRoute path="/editor" component={Editor}/>
                    <PublicRoute path="/login" component={Login}/>
                    <PublicRoute path="/registration" component={Registration}/>
                    <Redirect to="/movies" />
                </Switch>   
            </BrowserRouter>
        </>
    );
};

const withTranslationWords = withTranslation(['header_title']);

export default withTranslationWords(connect(mapState)(HomepageHeader));