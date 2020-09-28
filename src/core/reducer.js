import { SearchBy } from '../utils/seacrhByName/searchByName';

const searchBy = new SearchBy();

const _ = require('lodash');

const initialState = {
    isLogined: null,
    allFilms: [],
    allActors: [],
    allUsers: [],
    currentActor: [],
    currentFilms: [],
    selectedMovie: [],
    byLikes: false,
    byStars: false,
};
  
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_MOVIES':
            return {...state, allFilms: action.payload, currentFilms: action.payload, byLikes: false, byStars: false};

        case 'GET_ACTORS':
            return {...state, allActors: action.payload};    

        case 'SORT_BY_LIKES_DOWN':
                return {...state, byLikes: true, currentFilms:_.sortBy(state.currentFilms, 'likes').reverse()};

        case 'SORT_BY_LIKES_UP':
            return {...state, byLikes: false, currentFilms: _.sortBy(state.currentFilms, 'likes')};

        case 'SORT_BY_STARS_UP':
            return {...state, byStars: false, currentFilms: _.sortBy(state.currentFilms, 'stars')};

        case 'SORT_BY_STARS_DOWN':
            return {...state, byStars: true, currentFilms: _.sortBy(state.currentFilms, 'stars').reverse()};

        case 'SEARCH_BY_NAME':
            return {...state, currentFilms: searchBy.searchByName(action.payload, state.allFilms)};

        case 'SEARCH_RESET':
            return {...state, currentFilms: state.allFilms};

        case 'SELECT_MOVIE':
            return {...state, selectedMovie: action.payload};

        case 'LOGIN':
            return {...state, isLogined: action.payload.log}

        case 'BACK':
            return {...state}; 
        
        case 'SELECT_ACTOR':
            return {...state, currentActor: action.payload};

        case 'UPDATE_MOVIES':
            return {...state, allFilms: action.payload, currentFilms: action.payload,}

        case 'GET_USERS_DATA': 
            return { ...state, allUsers: action.payload }
    
        default:
            return {...state};
    };
};

export default reducer;