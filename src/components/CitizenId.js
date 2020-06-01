import React, {useState} from 'react';
import { Form } from 'react-bootstrap'

const CitizenId = ({ name, onChange, errors}) => {

  const [fields , setFields] = useState([]);

  const handleChange = (event, index) => {
    
    let newFields = fields 
    newFields[index] = event.target.value

    setFields(newFields);
    onChange(name, newFields.join(''));
   
  }
  return ( 
    <div className="d-flex flex-wrap">
      <Form.Label>CitizenID:</Form.Label>
      <div>
        <div className="d-flex">
          <Form.Control
            className={`${!!errors.citizenId ? 'border border-danger' : ''}`}
            type="text"
            placeholder="x"
            name="citizen-id-1"
            maxLength="1" 
            value={fields[0]}
            onChange={ event => handleChange(event, 0)} 
            style={{ width: '35px'}}
          />
          <Form.Label> - </Form.Label>
          <Form.Control
            className={`${!!errors.citizenId ? 'border border-danger' : ''}`}
            type="text"
            placeholder="xxxx"
            name="citizen-id-2"
            maxLength="4" 
            value={fields[1]}
            onChange={ event => handleChange(event, 1)}
            style={{ width: '65px'}}
          />
          <Form.Label> - </Form.Label>
          <Form.Control
            className={`${!!errors.citizenId ? 'border border-danger' : ''}`}
            type="text"
            placeholder="xxxxx"
            name="citizen-id-3"
            maxLength="5" 
            value={fields[2]}
            onChange={ event => handleChange(event, 2)}
            style={{ width: '80px'}}
          />
          <Form.Label> - </Form.Label>
          <Form.Control
            className={`${!!errors.citizenId ? 'border border-danger' : ''}`}
            type="text"
            placeholder="xx"
            name="citizen-id-4"
            maxLength="2" 
            value={fields[3]}
            onChange={ event => handleChange(event, 3)}
            style={{ width: '45px'}}
          />
          <Form.Label> - </Form.Label>
          <Form.Control
            className={`${!!errors.citizenId ? 'border border-danger' : ''}`}
            type="text"
            placeholder="x"
            name="citizen-id-5"
            maxLength="1" 
            value={fields[4]}
            onChange={ event => handleChange(event, 4)}
            style={{ width: '35px'}}
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