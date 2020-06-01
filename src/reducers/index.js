import { combineReducers } from 'redux'
import personals from './personals'
import initialPersonal from './initialPersonal'

const allReducers = combineReducers({
  personals,
  initialPersonal
})

// function crudApp(state = {}, action) {
//   return {
//     personals: personals(state.personals, action)
//   }
// }

export default allReducers ;