import { combineReducers } from 'redux';
import googleReducer from '../GoogleReducer/googleReducer';

 const rootreducer = combineReducers({
    googleReducer
 });

export default rootreducer;