import React from 'react';
import {Table,Form,Button,Pagination} from 'react-bootstrap'

const TableData = (props) => {
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
            <th></th>
            {/* <th>Title</th> */}
            {/* <th>Birthday</th> */}
            {/* <th>CitizenID</th> */}
            {/* <th>Passport</th> */}
            {/* <th>Expected Salary</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>  
              <Form.Check
                id="order-i"
                custom
                inline
                label=""
                type="checkbox"
              />
            </td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td className="text-right">
              <a className="mr-1" href="#edit">EDIT</a>/
              <a className="ml-1"href="#delete">DELETE</a>
            </td>
          
          </tr>
        </tbody>
      </Table>
    </div>

   );
}
 
export default TableData;