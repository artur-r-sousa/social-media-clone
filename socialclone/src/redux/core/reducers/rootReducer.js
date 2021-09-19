import { combineReducers } from 'redux';

import usersReducer from './usersReducer';
import tweetsReducer from './tweetsReducer';

export default combineReducers({  
    user: usersReducer,
    tweets: tweetsReducer
});