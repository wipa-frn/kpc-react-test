import { CREATE, UPDATE, DELETE, DELETE_ALL } from '../actions/crud'

const d = [
  {
    birthDay: 'Sun May 31 2020 00:00:00 GMT+0700 (เวลาอินโดจีน)',
    citizenId: "1333333333333",
    expectedSalary: 20000,
    firstName: "วิภาวดี",
    gender: "Female",
    id: 1,
    lastName: "ม่อนคุต",
    mobilePhone: "6631653904",
    nationality: "Albanian",
    passportNo: "",
    title: "Ms.",
  },
  {
    birthDay: 'Sun May 31 2020 00:00:00 GMT+0700 (เวลาอินโดจีน)',
    citizenId: "1333333333333",
    expectedSalary: 20000,
    firstName: "วิภาวดี",
    gender: "Female",
    id: 2,
    lastName: "ม่อนคุต",
    mobilePhone: "6631653904",
    nationality: "Albanian",
    passportNo: "",
    title: "Ms.",
  },
  {
    birthDay: 'Sun May 31 2020 00:00:00 GMT+0700 (เวลาอินโดจีน)',
    citizenId: "1333333333333",
    expectedSalary: 20000,
    firstName: "วิภาวดี",
    gender: "Female",
    id: 3,
    lastName: "ม่อนคุต",
    mobilePhone: "6631653904",
    nationality: "Albanian",
    passportNo: "",
    title: "Ms.",
  },
  {
    birthDay: 'Sun May 31 2020 00:00:00 GMT+0700 (เวลาอินโดจีน)',
    citizenId: "1333333333333",
    expectedSalary: 20000,
    firstName: "วิภาวดี",
    gender: "Female",
    id: 4,
    lastName: "ม่อนคุต",
    mobilePhone: "6631653904",
    nationality: "Albanian",
    passportNo: "",
    title: "Ms.",
  },
  {
    birthDay: 'Sun May 31 2020 00:00:00 GMT+0700 (เวลาอินโดจีน)',
    citizenId: "1333333333333",
    expectedSalary: 20000,
    firstName: "วิภาวดี",
    gender: "Female",
    id: 5,
    lastName: "ม่อนคุต",
    mobilePhone: "6631653904",
    nationality: "Albanian",
    passportNo: "",
    title: "Ms.",
  },
  {
    birthDay: 'Sun May 31 2020 00:00:00 GMT+0700 (เวลาอินโดจีน)',
    citizenId: "1333333333333",
    expectedSalary: 20000,
    firstName: "วิภาวดี",
    gender: "Female",
    id: 6,
    lastName: "ม่อนคุต",
    mobilePhone: "6631653904",
    nationality: "Albanian",
    passportNo: "",
    title: "Ms.",
  },
  {
    birthDay: 'Sun May 31 2020 00:00:00 GMT+0700 (เวลาอินโดจีน)',
    citizenId: "1333333333333",
    expectedSalary: 20000,
    firstName: "วิภาวดี",
    gender: "Female",
    id: 7,
    lastName: "ม่อนคุต",
    mobilePhone: "6631653904",
    nationality: "Albanian",
    passportNo: "",
    title: "Ms.",
  },
  {
    birthDay: 'Sun May 31 2020 00:00:00 GMT+0700 (เวลาอินโดจีน)',
    citizenId: "1333333333333",
    expectedSalary: 20000,
    firstName: "วิภาวดี",
    gender: "Female",
    id: 8,
    lastName: "ม่อนคุต",
    mobilePhone: "6631653904",
    nationality: "Albanian",
    passportNo: "",
    title: "Ms.",
  },
  {
    birthDay: 'Sun May 31 2020 00:00:00 GMT+0700 (เวลาอินโดจีน)',
    citizenId: "1333333333333",
    expectedSalary: 20000,
    firstName: "วิภาวดี",
    gender: "Female",
    id: 9,
    lastName: "ม่อนคุต",
    mobilePhone: "6631653904",
    nationality: "Albanian",
    passportNo: "",
    title: "Ms.",
  },
  {
    birthDay: 'Sun May 31 2020 00:00:00 GMT+0700 (เวลาอินโดจีน)',
    citizenId: "1333333333333",
    expectedSalary: 20000,
    firstName: "วิภาวดี",
    gender: "Female",
    id: 10,
    lastName: "ม่อนคุต",
    mobilePhone: "6631653904",
    nationality: "Albanian",
    passportNo: "",
    title: "Ms.",
  },
]

export default function personals (state = d, action) {
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

      alert(action.text)
      return newState  

    default:
      return state
  }
}
