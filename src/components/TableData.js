import React from 'react';
import { useSelector} from 'react-redux'
import {Table,Form,Button,Pagination} from 'react-bootstrap'
// import { createPersonal } from '../actions/crud'

const TableData = () => {
  const personals = useSelector(state => state.personals) 
  console.log(personals,'table')

  return ( 
    <div className="table-data">
      <div className="d-flex justify-content-between my-2">
        <div className="d-flex align-items-start" >
          <Form.Check
            id="select-all"
            custom
            inline
            label="Select All"
            type="checkbox"
          />
          <Button size="sm" variant="danger">DELETE</Button>
        </div>
        <div className="d-flex">
          <Pagination size="sm">
            <Pagination.Prev>PREV</Pagination.Prev>
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item active>{4}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Next>NEXT</Pagination.Next>
          </Pagination>
        </div>
      </div>

      <Table responsive striped bordered hover variant="dark" >
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Gender</th>
            <th>Nationality</th>
            <th>MobilePhone</th>
          </tr>
        </thead>
        <tbody>
          {
            personals.map((person, index) =>{
              return (
                <tr key={index}>
                  <td>  
                    <Form.Check id={`order-${index}`} custom inline label="" type="checkbox"/>
                  </td>
                  <td>{ `${person.firstName} ${person.lastName}` }</td>
                  <td>{ person.gender }</td>
                  <td>{ person.nationality }</td>
                  <td>{ person.mobilePhone }</td>
                  <td className="text-right">
                    <a id={`edit-${index}`} className="mr-1" href="#edit">EDIT</a>/
                    <a id={`delete-${index}`} className="ml-1"href="#delete">DELETE</a>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>

   );
}
 
export default TableData;