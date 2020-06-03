import * as yup from 'yup';

export function getPersonalSchema(){
  const personalSchema = yup.object().shape({
    title:  yup.string(),
    firstName: yup.string()    
      .min(1, 'This name is too short.')
      .max(50, 'This name is too long.')
      .required('This field is required.'),
    lastName: yup.string()
      .min(1, 'This name is too short.')
      .max(50, 'This name is too long.')
      .required('This field is required.'),
    birthDay: yup.date()
      .required('This field is required.'),
    nationality: yup.string(),
    citizenId: yup.string()
      .matches(/[0-9]{13}$/i,'This field consists of 13 digits.'),
    gender: yup.string(),
    mobilePhone: yup.string()
      .matches(/^[+][0-9]{9,20}$/i,'This field should be start with "+" and minimum 9 digits.')  //ugly validate 
      .required('This field is required.'),
    passportNo: yup.string(),
    expectedSalary: yup.number()
      .moreThan(0, 'Salary should be greater than 0.')
      .required('This field is required.'),
  });
  return personalSchema
}
