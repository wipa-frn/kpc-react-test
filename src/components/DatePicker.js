import React from 'react';
import DatePicker from 'react-datepicker' 
import "react-datepicker/dist/react-datepicker.css";

const DatePickerField = ({ name, value, onChange}) => {
  return (
    <div>
      <DatePicker
        className={`form-control`}
        placeholderText="MM/dd/yyyy"
        dateFormat="MM/dd/yyyy"
        maxDate={new Date()}
        selected={(value && new Date(value)) || null}
        onChange={val => {
          onChange(name, val);
        }}
        required
      />
    </div>
  );
};

export default DatePickerField;