import { DEFAULT, SELECTED, initialValues } from '../actions/initialPersonal'

export default function initialPersonal (state = initialValues, action) {

  switch (action.type) {
    case DEFAULT:    
      return action.default
    case SELECTED:  
      return action.personal
    default:
      return state
  }
}
