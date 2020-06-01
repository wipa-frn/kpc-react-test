import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Formik } from 'formik';
import { Form, Col, Button } from 'react-bootstrap'
import * as yup from 'yup';
import DatePicker from './DatePicker'
import MobilePhone from './MobilePhone'
import CitizenId from './CitizenId'
import { getDefaultPersonal } from '../datas/defaultPersonal'
import { createPersonal } from '../actions/crud'

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

const createNewId = (personals) => {
  //create new personal id 
  let newId = 0;

  if(personals.length > 0){
    newId = (personals[personals.length-1].id) + 1; 
  }
  return newId;
} 


const PersonalForm = () => {
  const defaultData = getDefaultPersonal();
  const personals = useSelector(state => state.personals) 
  const dispatch = useDispatch();

  const initialValues = {
    title: defaultData.titles[0],
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
  
  const handleSubmitForm = (value) => {
    //add id to personal object
    value = {
      ...value, 
      id: createNewId(personals),
      expectedSalary: parseInt(value.expectedSalary)
    }
    //add personal object to store 'personals'
    dispatch(createPersonal(value))
  }

  return ( 
    <Formik
      validationSchema={personalSchema}
      onSubmit={(value, { resetForm }) => {
          handleSubmitForm(value)
          resetForm()
        }
      }
      initialValues={initialValues}
    >
      {({
        handleSubmit,
        resetForm,
        handleChange,
        handleBlur,
        setFieldValue,
        isSubmitting,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form 
          className="personal-form shadow"
          noValidate 
          onSubmit={handleSubmit}
        >
          <Form.Row>
            <Col xs={3} sm={2} lg={2}>                  
              <Form.Label className="required">Title:</Form.Label>
              <div>
                <Form.Control 
                  as="select" 
                  name="title" 
                  value={values.title}
                  onChange={handleChange}
                >
                  {
                    defaultData.titles.map((title,index) => {
                      return <option value={title} key={'title-'+index}>{title}</option>
                    })
                  }
                </Form.Control>
              </div>       
            </Col>
         
            <Col xs={12} lg={5}>
              <Form.Label className="required">Firstname:</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isInvalid={errors.firstName}
              />
              {
                !!errors.firstName && <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
              }
            </Col>
            <Col xs={12} lg={5}>
              <Form.Label className="required">Lastname:</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={errors.lastName}
                />
                {
                  !!errors.lastName && <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
                }
            </Col>
          </Form.Row>

           <Form.Row className="my-0" >
             <Col className="d-flex my-2 p-0" lg={4}>
              <Form.Label className="required">Birthday:</Form.Label>
              <div>
                <DatePicker
                  name="birthDay"
                  value={values.birthDay}
                  onChange={setFieldValue}
                  isInvalid={errors.birthDay}
                  errors={errors}
                />
              </div>
            </Col>
            <Col className="d-flex my-2 p-0" lg={6}>
              <Form.Label>Nationality:</Form.Label>
              <div>
                <Form.Control 
                  as="select"
                  name="nationality"
                  value={values.nationality}
                  onChange={handleChange}
                >
                  <option value="" >-- Please Select --</option>
                  {
                    defaultData.nationalities.map((nationality,index) => {
                      return <option value={nationality} key={'nationality-'+index}>{nationality}</option>
                    })
                  }
                </Form.Control>
              </div>
            </Col>

          </Form.Row> 

          <Form.Row>
            <div>
              <CitizenId
                name="citizenId"
                value={values.citizenId}
                onChange={setFieldValue}
                errors={errors}
              />
            </div>
          </Form.Row>

          <Form.Row>
            <Form.Label>Gender:</Form.Label>
            <div>
            {
              defaultData.genders.map((gender,index) => {
                return <Form.Check 
                          inline
                          key={'gender' + index}
                          label={gender} 
                          type="radio" 
                          name="gender"
                          checked={values.gender === gender}
                          value={values.gender}
                          onChange={() => setFieldValue("gender", gender)}
                        />
              })
            }
            </div>
          </Form.Row>

          <Form.Row >
            <Form.Label className="required">Mobile Phone:</Form.Label>
            <div>
              <MobilePhone 
                name="mobilePhone"
                value={values.mobilePhone}
                onChange={setFieldValue}
                errors={errors}
              />
            </div>
          </Form.Row>

          <Form.Row >
            <Form.Label >Passport No:</Form.Label>
            <div>
              <Form.Control
                type="text"
                placeholder="Passport No."
                name="passportNo"
                value={values.passportNo}
                onChange={handleChange}
                isInvalid={errors.passportNo}
              />
              {
                !!errors.passportNo && <Form.Control.Feedback type="invalid">{errors.passportNo}</Form.Control.Feedback>
              }
            </div>
          </Form.Row>

          <Form.Row >
            <Form.Label className="required">Expected Salary:</Form.Label>
            <div className="d-flex flex-column">
              <Form.Control
                type="text"
                placeholder="Expected salary"
                name="expectedSalary"
                value={values.expectedSalary}
                onChange={handleChange}
              />
              {
                !!errors.expectedSalary && <Form.Control.Feedback type="invalid">{errors.expectedSalary}</Form.Control.Feedback>
              }
            </div>
            <Form.Label>THB</Form.Label>
          </Form.Row>
                       
          <div className="w-100 d-flex justify-content-end"><Button type="submit">Submit</Button></div>
        </Form>
      )}
    </Formik>
   );
}
 
export default PersonalForm;
