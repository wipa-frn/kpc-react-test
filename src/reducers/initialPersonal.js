import { DEFAULT, SELECTED } from '../actions/initialPersonal'

export default function initialPersonal (state = null, action) {
  switch (action.type) {
    case DEFAULT:    
      return action.default
    case SELECTED:  
      return action.personal
    default:
      return state
  }
}
