import React from 'react';
import DatePicker from 'react-datepicker' 
import "react-datepicker/dist/react-datepicker.css";

const DatePickerField = ({ name, value, onChange, isValid, errors}) => {
  return (
    <div className="d-flex flex-column">
      <DatePicker
        className={`form-control${!!errors.birthDay ? ' border border-danger' : '' }`}
        placeholderText="MM/dd/yyyy"
        dateFormat="MM/dd/yyyy"
        maxDate={new Date()}
        selected={(value && new Date(value)) || null}
        onChange={val => {
          onChange(name, val);
        }}
      /> 
      
      {
        !!errors.birthDay && <div className="invilid-text">{errors.birthDay}</div>
      }
    </div>
  );
};

export default DatePickerField;