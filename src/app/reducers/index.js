import {combineReducers} from 'redux'
import searchReducer from './search'
import filmInfo from "./filmInfo"

export default combineReducers({
    searchReducer,filmInfo
})