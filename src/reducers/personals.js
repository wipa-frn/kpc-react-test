import { CREATE, UPDATE, DELETE, DELETE_ALL } from '../actions/crud'

const defaultValue = () => {
  const data = JSON.parse(localStorage.getItem('personals'));
  return data;
}

export default function personals (state = defaultValue(), action) {
  let newState = [];
  switch (action.type) {
    case CREATE:     //create person with props object
      newState = [...state,action.personal] 
      localStorage.setItem('personals', JSON.stringify(newState))
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
      localStorage.setItem('personals', JSON.stringify(newState))
      alert(action.text)
      return newState  

    case DELETE_ALL:    //remove person with id list
      newState = state;

      state.forEach(person => {
        action.idList.forEach(id => {
          if(person.id === id){
            //remove each id
            newState = newState.filter(person =>{
              return person.id !== id
            })
          }
        })
      })

      localStorage.setItem('personals', JSON.stringify(newState))
      alert(action.text)
      return newState  

    default:
      return state
  }
}
