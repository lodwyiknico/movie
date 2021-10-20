import { combineReducers } from 'redux'

const getListMovies = (state = {load:false, data:[], stat:'', msg:'',obj:false}, action) => {
  switch (action.type) {
    case 'LIST_PAGE':
      return {load:action.load, data:action.data, stat:action.stat, msg:action.msg, obj:action.obj}
    default:
      return state
  }
}


const aclReducer = combineReducers({
  getListMovies,
})

export default aclReducer
