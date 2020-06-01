import { CREATE, DELETE } from '../actions/crud'

export default function personals (state = [], action) {
  switch (action.type) {
    case CREATE:
      alert(action.text)

      return [...state,action.personal] 
        
    default:
      return state
  }
}
