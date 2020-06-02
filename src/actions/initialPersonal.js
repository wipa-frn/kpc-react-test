import { getDefaultPersonal } from '../datas/defaultPersonal'

export const DEFAULT = 'DEFAULT'; 
export const SELECTED = 'SELECTED'; 

const defaultTitle = getDefaultPersonal().titles[0];
export const initialValues = {
  id: -1,
  title: defaultTitle,
  nationality: '',
  gender: '',
  citizenId:'',
  passportNo: '',
  firstName: '',
  lastName: '',
  birthDay: '',
  mobilePhone: '',
  expectedSalary: ''
}

export const defaultPerson = () => {
  return {
    type: DEFAULT,
    default: null
  }
}

export const selectedPerson = (personal) => {
  return {
    type: SELECTED,
    personal: personal
  }
}
