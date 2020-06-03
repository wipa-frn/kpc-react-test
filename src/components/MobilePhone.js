import React from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const MobilePhone = ({ name, value, onChange, errors }) => {
  return ( 
    <div>
      <PhoneInput
        inputStyle={{borderColor: `${!!errors.mobilePhone ? '#dc3545' : ''}`}}
        buttonStyle={{borderColor: `${!!errors.mobilePhone ? '#dc3545' : ''}`}}
        country={'th'}
        placeholder="Phone number"
        value={value}
        onChange={(val) => {onChange(name, '+' + val)}}
        isInvalid={errors.mobilePhone}
      />
      {
        !!errors.mobilePhone &&  <div className="invilid-text">{errors.mobilePhone}</div>
      }
    </div>
   );
}
 
export default MobilePhone;