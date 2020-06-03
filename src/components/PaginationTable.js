import React from 'react';
import {Pagination} from 'react-bootstrap'

const PaginationTable = (props) => {
  const {dataPerPage, totalData, paginate, nextPage, prevPage, currentPage, showPage} = props
  const pageNumbers = [];
  const totalPage = Math.ceil(totalData / dataPerPage)

  //when user define total of show page
  if(showPage > 0){
    for (let i = 1; ((i <= showPage) && (i <= totalPage)); i++) {
      pageNumbers.push(i);
    }
  }else {
    for (let i = 1; (i <= totalPage); i++) {
      pageNumbers.push(i);
    }
  }

  //when user click nextpage ---> show new page 
  if(currentPage > pageNumbers[pageNumbers.length-1]){
    pageNumbers.shift()
    pageNumbers.push(currentPage)
  }

  return ( 
    <Pagination size="sm">
      <Pagination.Prev onClick={() => prevPage()}>PREV</Pagination.Prev>
      {
        pageNumbers.map(num => (
          <Pagination.Item 
            key={num} 
            active={currentPage === num ? true : false}
            onClick={() => paginate(num)}>
              {num}
          </Pagination.Item>
        ))
      }
      <Pagination.Ellipsis disabled/>
      <Pagination.Next onClick={() => nextPage()}>NEXT</Pagination.Next>
    </Pagination>
   );
}
 
export default PaginationTable;