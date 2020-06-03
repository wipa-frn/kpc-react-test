import React, {useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Form, Col, Button } from 'react-bootstrap'
import { Formik } from 'formik';
import DatePicker from './DatePicker'
import MobilePhone from './MobilePhone'
import CitizenId from './CitizenId'
import { getInitialFormValues, getDefaultPersonal } from '../datas/defaultPersonal'
import { getPersonalSchema } from '../datas/validationSchema.js'
import { createPersonal, updatePersonal } from '../actions/crud'
import { defaultPerson } from '../actions/initialPersonal'

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
                placeholder="First Name"
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
                  placeholder="Last Name"
                  value={values.lastName}
                  onChange={handleChange}
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
            </Col>

          </Form.Row> 

          <Form.Row>
            <div>
              <CitizenId
                name="citizenId"
                onChange={setFieldValue}
                errors={errors}
                values={values}
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
                onChange={(handleChange)}
                isInvalid={errors.expectedSalary}
              />
              {
                !!errors.expectedSalary && <Form.Control.Feedback type="invalid">{errors.expectedSalary}</Form.Control.Feedback>
              }
            </div>
            <Form.Label>THB</Form.Label>
          </Form.Row>
                       
            <div className="w-100 d-flex justify-content-end" ><Button type="submit">{isEditing ? 'Update' : 'Submit'}</Button></div>
        </Form>
      )}}
    </Formik>
   );
}
 
export default PersonalForm;
