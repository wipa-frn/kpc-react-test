import { CREATE, UPDATE, DELETE } from '../actions/crud'

export default function personals (state = [], action) {
  let newState = [];
  switch (action.type) {
    case CREATE:     //create person with props object
      newState = [...state,action.personal] 
      alert(action.text)
      return newState

    case UPDATE:     //update person with props object
      newState = state.map((person) => {
        if(person.id === action.id){
          person = action.person
        }
        return person  
      })
      console.log(newState,'new')
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
