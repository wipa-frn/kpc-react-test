import React from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const MobilePhone = ({ name, value, onChange }) => {
  return ( 
    <PhoneInput
      country={'th'}
      value={value}
      onChange={val => {
        onChange(name, val);
      }}
    />
   );
}
 
export default MobilePhone;