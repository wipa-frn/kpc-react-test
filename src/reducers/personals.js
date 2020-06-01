import { CREATE, DELETE } from '../actions/crud'

export default function personals (state = [], action) {
  let newState = [];
  switch (action.type) {
    case CREATE:     //create person with props object
      newState = [...state,action.personal] 
      alert(action.text)
      return newState

    case DELETE:    //remove person with id
      newState = state.filter((person) => {
        return person.id !== action.id
      })
      alert(action.text)
      return newState  

    default:
      return state
  }
}
