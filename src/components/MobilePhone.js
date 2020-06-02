import React from 'react';
import PhoneInput from 'react-phone-input-2'
// import startsWith from 'lodash.startswith';
import 'react-phone-input-2/lib/style.css'

const MobilePhone = ({ name, value, onChange, errors }) => {
  return ( 
    <PhoneInput
      // inputStyle={{borderColor: `{${!!errors.mobilePhone ? '#dc3545' : 'blue'}`}}
      // buttonStyle={{borderColor: `{${!!errors.mobilePhone ? '#dc3545' : 'blue'}`}}
      country={'th'}
      value={value}
      onChange={(val) => {
        onChange(name, '+' + val);
      }}
      // isValid={(inputNumber, country, countries) => {
      //   return countries.some((country) => {
      //     return startsWith(inputNumber, country.dialCode) || startsWith(country.dialCode, inputNumber);
      //   });
      // }}
    />
   );
}
 
export default MobilePhone;