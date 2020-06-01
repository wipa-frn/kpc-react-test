import { combineReducers } from 'redux'
import personals from './personals'

const allReducers = combineReducers({
  personals
})

// function crudApp(state = {}, action) {
//   return {
//     personals: personals(state.personals, action)
//   }
// }

export default allReducers ;