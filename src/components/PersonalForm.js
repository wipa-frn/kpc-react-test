import React, {useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Form,Row, Col, Button } from 'react-bootstrap'
import { Formik } from 'formik';
import { getInitialFormValues, getDefaultPersonal } from '../datas/defaultPersonal'
import { getPersonalSchema } from '../datas/validationSchema.js'
import { createPersonal, updatePersonal } from '../actions/crud'
import { defaultPerson } from '../actions/initialPersonal'
import DatePicker from './DatePicker'
import MobilePhone from './MobilePhone'
import CitizenId from './CitizenId'

const personalSchema = getPersonalSchema()
const defaultData = getDefaultPersonal()
const initialValues = getInitialFormValues()

const createNewId = (personals) => {
  //create new personal id 
  let newId = 0;

  if(personals.length > 0){
    newId = (personals[personals.length-1].id) + 1; 
  }
  return newId;
} 

const addSeparateFeildCitizen = (person) => {
  return {
    ...person,        
    citizenId1: person.citizenId.substring(0, 1),
    citizenId2: person.citizenId.substring(1, 5),
    citizenId3: person.citizenId.substring(5, 10),
    citizenId4: person.citizenId.substring(11, 13),
    citizenId5: person.citizenId.substring(12)
  }
}
const updateFormat = (id, value) => {
  let result = {
    ...value, 
    id: id,
    expectedSalary: parseInt(value.expectedSalary), 
  }

  //remove feild citizen
  delete result.citizenId1
  delete result.citizenId2
  delete result.citizenId3
  delete result.citizenId4
  delete result.citizenId5
  return result 
}

const PersonalForm = () => {

  const personals = useSelector(state => state.personals) 
  const initialPersonal = useSelector(state => state.initialPersonal) 
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [initialForm, setInitialForm] = useState(initialValues)
  
  useEffect(() => {
    //this form is --> update or create  
    if(initialPersonal !== null){
      setInitialForm(addSeparateFeildCitizen(initialPersonal))
      setIsEditing(true)
    }else{
      setInitialForm(initialValues)
    }
    
  },[initialPersonal]);

  const handleSubmitForm = (value) => {
    if(isEditing){
      //update personal object to store 'personals'
      value = updateFormat(value.id, value)
      dispatch(updatePersonal(value))
      dispatch(defaultPerson())
      setInitialForm(initialValues)
      setIsEditing(false)
    }else{
      //add personal object to store 'personals'
      value = updateFormat(createNewId(personals), value)
      dispatch(createPersonal(value))
    }
  }

  return ( 
    <Formik
      enableReinitialize={true}
      initialValues={initialForm}
      validationSchema={personalSchema}
      onSubmit={(value, { resetForm }) => {
          handleSubmitForm(value)
          resetForm(initialForm)
        }
      }
    >
      {({handleSubmit,
        handleChange,
        setFieldValue,
        values,
        errors
      }) => {
      return (
        <Form 
        className="personal-form shadow"
        noValidate 
        onSubmit={handleSubmit}
        >
          <Row>
            <Col xs={5} sm={5} md={3} lg={2}>
               <div className="group-label">
                <Form.Label className="required">Title:</Form.Label>
                <div className="flex-fill">
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
              </div>
            </Col>

            <Col xs={12} sm={12} md={9} lg={5}>
              <div className="group-label">
                <Form.Label className="required ">First&nbsp;name:</Form.Label>
                <div className="flex-fill">
                  <Form.Control
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={values.firstName}
                    onChange={handleChange}
                    isInvalid={errors.firstName}
                  />
                  {
                    !!errors.firstName && <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                  }
                </div>
              </div>
            </Col>

            <Col xs={12} sm={12} md={12} lg={5}>
              <div className="group-label">              
                <Form.Label className="required">Last&nbsp;name:</Form.Label>
                <div className="flex-fill">
                  <Form.Control
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={values.lastName}
                    onChange={handleChange}
                    isInvalid={errors.lastName}
                  />
                  {
                    !!errors.lastName && <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
                  }
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={8} sm={6} md={5} lg={4}>
              <div className="group-label">
                <Form.Label className="required">Birthday:</Form.Label>
                <div className="flex-fill">
                  <DatePicker
                    name="birthDay"
                    value={values.birthDay}
                    onChange={setFieldValue}
                    isInvalid={errors.birthDay}
                    errors={errors}
                  />
                </div>
              </div>
            </Col>

            <Col xs={12} sm={8} md={6} lg={5}>
              <div className="group-label">
                <Form.Label >Nationality:</Form.Label>
                <div className="flex-fill">
                  <Form.Control 
                    as="select"
                    name="nationality"
                    value={values.nationality}
                    onChange={handleChange}
                  >
                    <option value="">-- Please Select --</option>
                    {
                      defaultData.nationalities.map((nationality,index) => {
                        return (
                          <option 
                            value={nationality} 
                            key={'nationality-'+index} 
                          >
                            {nationality}
                          </option>
                        )
                      })
                    }
                  </Form.Control>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <CitizenId
                name="citizenId"
                onChange={setFieldValue}
                errors={errors}
                values={values}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="group-label">
                <Form.Label>Gender:</Form.Label>
                <div className="flex-fill">
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
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="group-label">
                <Form.Label className="required">Mobile&nbsp;Phone:</Form.Label>
                <MobilePhone 
                  name="mobilePhone"
                  value={values.mobilePhone}
                  onChange={setFieldValue}
                  errors={errors}
                />
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={10} sm={9} md={7} lg={5}>
              <div className="group-label">
                <Form.Label >Passport&nbsp;No:</Form.Label>
                <div className="flex-fill">
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
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={10} sm={9} md={7} lg={5}>
              <div className="group-label">
                <Form.Label className="required">Expected&nbsp;Salary:</Form.Label>
                <div className="d-flex align-items-baseline">
                  <div className="d-flex flex-column">
                    <Form.Control
                      type="text"
                      placeholder="Expected salary"
                      name="expectedSalary"
                      value={values.expectedSalary}
                      onChange={handleChange}
                      isInvalid={errors.expectedSalary}
                      />
                    {
                      !!errors.expectedSalary && <Form.Control.Feedback type="invalid">{errors.expectedSalary}</Form.Control.Feedback>
                    }

                  </div>
                  <Form.Label className="ml-2">THB</Form.Label>

                </div>
              </div>
            </Col>
          </Row>
            
          <div className="w-100 d-flex justify-content-end" >
            <Button type="submit">{isEditing ? 'Update' : 'Submit'}</Button>
          </div>
      
      </Form>
    )}}
  </Formik>
  );
}
 
export default PersonalForm;
