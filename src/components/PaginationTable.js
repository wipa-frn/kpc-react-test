import React from 'react';
import {Pagination} from 'react-bootstrap'

const PaginationTable = () => {
  return ( 
    <Pagination size="sm">
      <Pagination.Prev>PREV</Pagination.Prev>
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item active>{4}</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Next>NEXT</Pagination.Next>
  </Pagination>
   );
}
 
export default PaginationTable;