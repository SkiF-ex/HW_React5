import axios from 'axios';
import ifFieldInputNull from '../utils/FieldCheck/fieldValueCheck'

const dispatchGetFilms = (payload) => ({
    type: 'GET_MOVIES',
    payload,
});

export const getFilms = () => async (dispatch) => {
    const {data} = await axios.get('http://localhost:3000/movies');

    dispatch(dispatchGetFilms(data));
};

const dispatchGetActors = (payload) => ({
    type: 'GET_ACTORS',
    payload,
});

export const getActors = () => async (dispatch) => {
    const {data} = await axios.get('http://localhost:3000/actors');

    dispatch(dispatchGetActors(data));
};

export const sortByLikeUp = () => ({
    type: 'SORT_BY_LIKES_UP',
});

export const sortByLikeDown = () => ({
    type: 'SORT_BY_LIKES_DOWN',
});

export const sortByStarsUp = () => ({
    type: 'SORT_BY_STARS_UP',
});

export const sortByStarsDown = () => ({
    type: 'SORT_BY_STARS_DOWN',
});

export const searchByName = (payload) => ({
    type: 'SEARCH_BY_NAME',
    payload,
});

export const searchReset = () => ({
    type: 'SEARCH_RESET',
});

export const selectMovie = (payload) => ({
    type: 'SELECT_MOVIE',
    payload,
});

export const back = () => {
    window.history.back();
    return {
        type: 'BACK',
    }
};

export const selectActor = (payload) => ({
    type: 'SELECT_ACTOR',
    payload,
});

const login = payload => ({
    type: 'LOGIN',
    payload,
});

export const getDataIsLogin = () => async (dispatch) => {
    const { data } = await axios.get('http://localhost:3000/isLogin');
    
    dispatch(login(data));
    return data.isLogined
};

const treatmentUsersData = payload => ({
    type: 'GET_USERS_DATA',
    payload,
});


export const getUsersData = () => async (dispatch) => {
    const {data} = await axios.get('http://localhost:3000/users');

    dispatch(treatmentUsersData(data));
};

const updateMovies = (payload) => ({
    type: 'UPDATE_MOVIES',
    payload,
})

const getNewMovies = () => async (dispatch) => {
    const {data} = await axios.get('http://localhost:3000/movies');

    dispatch(updateMovies(data));
}

export const deleteData = (payload) => async (dispatch) => {
    await axios.delete(`http://localhost:3000/movies/${payload}`);
        
    dispatch(getNewMovies());
};

export const editMovie = (payload, selectedMovie) => async (dispatch) => {
    await axios.put(`http://localhost:3000/movies/${selectedMovie.id}`, {
        "id": selectedMovie.id,
        "title": ifFieldInputNull(payload.title, selectedMovie.title),
        "posterUrl": ifFieldInputNull(payload.imgUrl, selectedMovie.posterUrl),
        "genres" : [ifFieldInputNull(payload.genres, selectedMovie.genres)],
        "stars": selectedMovie.stars,
        "likes": selectedMovie.likes,
        "actorsIds": selectedMovie.actorsIds,
        "director": ifFieldInputNull(payload.director, selectedMovie.director),
        "description": ifFieldInputNull(payload.description, selectedMovie.description),
    });

    dispatch(getNewMovies());
};

export const registr = (formData) => async () => {

    await axios.post('http://localhost:3000/users', {
        "name": formData.name,
        "password": formData.password,
    });

    alert('You have ragistered!');
}