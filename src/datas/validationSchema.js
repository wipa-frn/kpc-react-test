import * as yup from 'yup';

export function getPersonalSchema(){
  const personalSchema = yup.object().shape({
    title:  yup.string(),
    firstName: yup.string()    
      .min(2, 'This name is too short.')
      .max(50, 'This name is too long.')
      .required('This field is required.'),
    lastName: yup.string()
      .min(2, 'This name is too short.')
      .max(50, 'This name is too long.')
      .required('This field is required.'),
    birthDay: yup.date()
      .required('This field is required.'),
    nationality: yup.string(),
    citizenId: yup.string()
      .matches(/[0-9]{13}$/i,'Consists of 13 digits.'),
    gender: yup.string(),
    mobilePhone: yup.string(),
      // .matches(/[0-9]{11}$/i,'Consists of digits.'),
      // .required('This field is required.'),
    passportNo: yup.string(),
    expectedSalary: yup.number()
      .moreThan(0)
      .required('This field is required.'),
  });
  return personalSchema
}
