import { combineReducers } from 'redux'
import moviesReducer from './moviesReducer'
const movieApp = combineReducers({
  moviesReducer
})

export default movieApp