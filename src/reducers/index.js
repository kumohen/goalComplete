import {combineReducers} from 'redux';
import user from './reducer_users';
import goals from './reducer_goals';
import completeGoals from './reducer_completd_goal';

const rootReducer = combineReducers({
    user,
    goals,
    completeGoals
})
export default rootReducer;
