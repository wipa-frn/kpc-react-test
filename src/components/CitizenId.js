import React from 'react';
import { Form } from 'react-bootstrap'

const CitizenId = ({ name, values, onChange, errors}) => {

  const handleOnChange = (event, id) => {
    
    let updateCitizenId = '';
    //combind string seperate fields
    for (let index = 1; index <= 5; index++) {
      if(index === id){
        updateCitizenId += event.target.value
      }else{
        updateCitizenId += values[`${name}${index}`]
      }
    }
    
    onChange(`${name}${id}`, event.target.value)
    onChange(`${name}`, updateCitizenId) 
  }

  return ( 
    <div className="d-flex flex-wrap">
      <Form.Label>CitizenID:</Form.Label>
      <div>
        <div className="d-flex">
          <Form.Control
            className={!!errors.citizenId ? 'border border-danger' : ''}
            type="text"
            placeholder="x"
            name="citizenId1"
            maxLength="1" 
            style={{ width: '35px'}}
            value={values.citizenId1}
            onChange={event => handleOnChange(event, 1)}
          />
          <Form.Label> - </Form.Label>
          <Form.Control
            className={!!errors.citizenId ? 'border border-danger' : ''}
            type="text"
            placeholder="xxxx"
            name="citizenId2"
            maxLength="4" 
            style={{ width: '65px'}}
            value={values.citizenId2}
            onChange={event => handleOnChange(event, 2)}

          />
          <Form.Label> - </Form.Label>
          <Form.Control
            className={!!errors.citizenId ? 'border border-danger' : ''}
            type="text"
            placeholder="xxxxx"
            name="citizenId3"
            maxLength="5" 
            style={{ width: '80px'}}
            value={values.citizenId3}
            onChange={event => handleOnChange(event, 3)}

          />
          <Form.Label> - </Form.Label>
          <Form.Control
            className={!!errors.citizenId ? 'border border-danger' : ''}
            type="text"
            placeholder="xx"
            name="citizenId4"
            maxLength="2" 
            style={{ width: '45px'}}
            value={values.citizenId4}
            onChange={event => handleOnChange(event, 4)}

          />
          <Form.Label> - </Form.Label>
          <Form.Control
            className={!!errors.citizenId ? 'border border-danger' : ''}
            type="text"
            placeholder="x"
            name="citizenId5"
            maxLength="1" 
            style={{ width: '35px'}}
            value={values.citizenId5}
            onChange={event => handleOnChange(event, 5)}

          />
        </div>
      
        {
          !!errors.citizenId && <div className="invilid-text">{errors.citizenId}</div>
        }
      </div>
    </div>
  );
}
 
export default CitizenId;