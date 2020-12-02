import ThemeReducer from './ThemeReducer';
import UserDataReducer from './UserDataReducer';
import {combineReducers} from 'redux';


const rootReducer = combineReducers({
    ThemeReducer,
    UserDataReducer,
});

export default rootReducer;