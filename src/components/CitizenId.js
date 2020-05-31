import React, {useState, useEffect} from 'react';
import { Form } from 'react-bootstrap'

// const critizenIdSchema = yup.object().shape({
//   firstName: yup.string()    
//     .min(2, 'This name is too short.')
//     .max(50, 'This name is too long.')
//     .required('This field is required.'),
//   lastName: yup.string().required()
//     .min(2, 'This name is too short.')
//     .max(50, 'This name is too long.')
//     .required('This field is required.'),
// });
const CitizenId = ({ name, value, onChange }) => {

  const [fields , setFields] = useState([]);
  const [citizenId , setCitizenId] = useState('');

  
  const setCitizenIdValue = (event, index) => {
    
    let newFields = fields 
    newFields[index] = event.target.value

    setFields(newFields);


    console.log(fields,'fields')
    // console.log(citizenId,'citizenId')
    // onChange(name, citizenId);
  }

  useEffect(() => {
    // let result = '';
    // fields.forEach(field => {
    //   result += field
    //   setCitizenId(result);
    // });

    // console.log(citizenId,'citizenId')
  });

  return ( 
    <div className="d-flex flex-wrap">
      <Form.Label>CitizenID:</Form.Label>
      <div className="d-flex">
        <Form.Control
          type="text"
          placeholder="x"
          name="citizen-id-1"
          maxLength="1" 
          value={fields[0]}
          onChange={ event => setCitizenIdValue(event, 0)} 
          style={{ width: '35px'}}
        />
        <Form.Label> - </Form.Label>
        <Form.Control
          type="text"
          placeholder="xxxx"
          name="citizen-id-2"
          maxLength="4" 
          value={fields[1]}
          onChange={ event => setCitizenIdValue(event, 1)}
          style={{ width: '65px'}}
        />
        <Form.Label> - </Form.Label>
        <Form.Control
          type="text"
          placeholder="xxxxx"
          name="citizen-id-3"
          maxLength="5" 
          value={fields[2]}
          onChange={ event => setCitizenIdValue(event, 2)}
          style={{ width: '75px'}}
        />
        <Form.Label> - </Form.Label>
        <Form.Control
          type="text"
          placeholder="xx"
          name="citizen-id-4"
          maxLength="2" 
          value={fields[3]}
          onChange={ event => setCitizenIdValue(event, 3)}
          style={{ width: '45px'}}
        />
        <Form.Label> - </Form.Label>
        <Form.Control
          type="text"
          placeholder="x"
          name="citizen-id-5"
          maxLength="1" 
          value={fields[4]}
          onChange={ event => setCitizenIdValue(event, 4)}
          style={{ width: '35px'}}
        />
      </div>
    </div>
  );
}
 
export default CitizenId;