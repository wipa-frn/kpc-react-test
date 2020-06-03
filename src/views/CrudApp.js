import React,{useState} from 'react';
import { useSelector } from 'react-redux'
import PersonalForm from '../components/PersonalForm'
import TableData from '../components/TableData'
import PaginationTable from '../components/PaginationTable'

function CrudApp() {
  const personals = useSelector(state => state.personals) 
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 10;
  const indexOfLastPost = currentPage * dataPerPage;
  const indexOfFirstPost = indexOfLastPost - dataPerPage;
  const currentData = personals.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNum => setCurrentPage(pageNum);
  
  const prevPage = () => {
    //page must be start with 1
    if(currentPage - 1 > 0){
      setCurrentPage(currentPage - 1 )
    }
  }

  const nextPage = () => {
    //page must be end with total page
    if (currentPage + 1 < Math.ceil(personals.length / dataPerPage)){
      setCurrentPage(currentPage + 1 )
    }
  };

  return (
    <div className="crud-app container d-flex flex-column justify-content-center">
      <h1 className="my-4">CRUD APP</h1>
      <PersonalForm/>
      <div className="w-100 my-3">
        {
          personals.length > 0 ? 
          <TableData 
            currentPersonals={currentData} 
            Pagination={() => {
              return <PaginationTable 
                dataPerPage={dataPerPage} 
                totalData={personals.length} 
                paginate={paginate} 
                prevPage={prevPage}
                nextPage={nextPage} 
                currentPage={currentPage} 
                showPage={4}
              />
              }
            }
          /> 
          :<h6 className="text-center">There is no data in the table.</h6>
        }
      </div>
    </div>
  );
}

export default CrudApp;
