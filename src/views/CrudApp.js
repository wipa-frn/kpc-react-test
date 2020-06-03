import React,{useState} from 'react';
import { useSelector } from 'react-redux'
import PersonalForm from '../components/PersonalForm'
import TableData from '../components/TableData'
import PaginationTable from '../components/PaginationTable'

const Pagination = () => {
  return <PaginationTable />
}
function CrudApp() {
  const personals = useSelector(state => state.personals) 


  return (
    <div className="crud-app container d-flex flex-column justify-content-center">
      <h1 className="my-4">CRUD APP</h1>
      <PersonalForm/>
      <div className="w-100 my-3">
        {
          personals.length > 0 ? <TableData currentPersonals={personals} Pagination={Pagination}/> : <h6 className="text-center">There is no data in the table.</h6>
        }
      </div>
    </div>
  );
}

export default CrudApp;
