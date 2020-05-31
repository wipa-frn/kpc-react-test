import React from 'react';
import PersonalForm from '../components/PersonalForm'

function CrudApp() {
  return (
    <div className="crud-app d-flex flex-column justify-content-center align-items-center">
      <h1 className="my-4">CRUD APP</h1>
      <PersonalForm/>
    </div>
  );
}

export default CrudApp;
