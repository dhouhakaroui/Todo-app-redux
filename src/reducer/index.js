import {combineReducers} from 'redux' 
import filterReducer from './filterReducer'
import Reducer from './reducer'
export default combineReducers ({Reducer,filterReducer})