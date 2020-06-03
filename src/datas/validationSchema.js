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
    citizenId1: yup.string()
    .matches(/[0-9]{1}$/i,'Consists of 13 digits.'),
    citizenId2: yup.string()
    .matches(/[0-9]{4}$/i,'Consists of 13 digits.'),
    citizenId3: yup.string()
    .matches(/[0-9]{5}$/i,'Consists of 13 digits.'),
    citizenId4: yup.string()
    .matches(/[0-9]{2}$/i,'Consists of 13 digits.'),
    citizenId5: yup.string()
    .matches(/[0-9]{1}$/i,'Consists of 13 digits.'),
    gender: yup.string(),
    mobilePhone: yup.string()
      .matches(/^[+]$/i,'Consists of digits.')
      .required('This field is required.'),
    passportNo: yup.string(),
    expectedSalary: yup.number()
      .moreThan(0)
      .required('This field is required.'),
  });
  return personalSchema
}
