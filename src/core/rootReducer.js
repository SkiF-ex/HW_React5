import reducer from './reducer';
import {reducer as formReducer} from 'redux-form'
import { combineReducers} from 'redux';

const rootReducer = combineReducers ({
    reducer,
    form: formReducer,
});

export default rootReducer;