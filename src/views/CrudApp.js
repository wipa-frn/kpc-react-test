import React from 'react';
import PersonalForm from '../components/PersonalForm'
import TableData from '../components/TableData'

function CrudApp() {
  return (
    <div className="crud-app container d-flex flex-column justify-content-center">
      <h1 className="my-4">CRUD APP</h1>
      <PersonalForm/>
      <div className="w-100 my-3">
        <TableData/>
      </div>
    </div>
  );
}

export default CrudApp;
