import React from 'react';
import { Formik } from 'formik';
import { Form, Col, Button } from 'react-bootstrap'
import * as yup from 'yup';
import DatePicker from './DatePicker'
import MobilePhone from './MobilePhone'
import CitizenId from './CitizenId'
import { getDefaultPersonal } from '../datas/defaultPersonal'

const personalSchema = yup.object().shape({
  title:  yup.string(),
  firstName: yup.string()    
    .min(2, 'This name is too short.')
    .max(50, 'This name is too long.')
    .required('This field is required.'),
  lastName: yup.string().required()
    .min(2, 'This name is too short.')
    .max(50, 'This name is too long.')
    .required('This field is required.'),
  birthDay: yup.date(),
    // .required('This field is required.'),
  nationality: yup.string(),
  gender: yup.string(),
  mobilePhone: yup.string(),
  passportNo: yup.string(),
  expectedSalary: yup.number()
    .moreThan(0)
    .round('ceil')
    .required('This field is required.'),
});

// const handleSubmitForm = values => {
//   // event.preventDefault();
//   console.log(values);
// }

const PersonalForm = () => {
  const defaultData = getDefaultPersonal()

  return ( 
    <Formik
      validationSchema={personalSchema}
      onSubmit={console.log}
      initialValues={{
        title: defaultData.titles[0],
        nationality: '',
        gender: '',
        passportNo: '',
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        setFieldValue,
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
                isValid={touched.firstName && !errors.firstName}
                isInvalid={errors.firstName}
              />
              {
                isValid ? <Form.Control.Feedback/> : <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
              }
            </Col>
            <Col xs={12} lg={5}>
              <Form.Label className="required">Lastname:</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  isValid={touched.lastName && !errors.lastName}
                  isInvalid={errors.lastName}
                />
                {
                  isValid ? <Form.Control.Feedback/> : <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
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
                />
                {
                  isValid ? <Form.Control.Feedback/> : <Form.Control.Feedback type="invalid">{errors.birthDay}</Form.Control.Feedback>
                }
              </div>
            </Col>
            <Col className="d-flex my-2 p-0" lg={7}>
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
            <CitizenId
              name="citizenId"
              value={values.citizenId}
              onChange={setFieldValue}
            />
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
              />
            </div>
          </Form.Row>

          <Form.Row >
            <Form.Label >Passport No:</Form.Label>
            <div>
              <Form.Control
                type="text"
                placeholder="Passport No."
                name="passport-no"
                value={values.passportNo}
                onChange={handleChange}
                isValid={touched.passportNo && !errors.passportNo}
                isInvalid={errors.passportNo}
              />
              {
                isValid ? <Form.Control.Feedback/> : <Form.Control.Feedback type="invalid">{errors.passportNo}</Form.Control.Feedback>
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
                isValid={touched.expectedSalary && !errors.expectedSalary}
                isInvalid={errors.expectedSalary}
              />
              {
                isValid ? <Form.Control.Feedback/> : <Form.Control.Feedback type="invalid">{errors.expectedSalary}</Form.Control.Feedback>
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
