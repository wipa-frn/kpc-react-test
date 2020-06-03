import React, {useState, useEffect} from 'react';
import {useDispatch } from 'react-redux'
import {Table,Form,Button} from 'react-bootstrap'
import { deletePersonal, deleteWithSelectedPersonal } from '../actions/crud'
import { selectedPerson } from '../actions/initialPersonal'

const initCheckboxItems = (personals = [], isChecked) => {
  return personals.map(person => {
    return {
      id: person.id,
      isChecked: isChecked,
    }
  })
}

const TableData = (props) => {
  const personals = props.currentPersonals;
  const Pagination = props.Pagination;
  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = useState(false); 
  const [checkboxItems, setCheckboxItems] = useState([]); 

  useEffect(() => {
    //update checkboxItems
    setCheckboxItems(initCheckboxItems(personals,false))
    
  }, [personals]);
  
  const handleChangeCheckboxItem = (e, id) => {
    const isChecked = e.target.checked;

    if(!isSelected){
      const newState = checkboxItems.map(item => {
        if(item.id === id) {
          item.isChecked = isChecked;
        }
        return item;
      })
  
      setCheckboxItems(newState);
    }

  }

  const handleChangeSelectAll = (e) => {
    const isChecked = e.target.checked;
    if (isChecked){
      setCheckboxItems(initCheckboxItems(personals,true));
    }else{
      setCheckboxItems(initCheckboxItems(personals,false));
    }

    setIsSelected(isChecked)
  }

  const handleDelete = () => {

    const selectedIdList = []

    checkboxItems.forEach(item => {
      if(item.isChecked ){
        selectedIdList.push(item.id)
      }
    });

    dispatch(deleteWithSelectedPersonal(selectedIdList))
    
  }

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
            checked={isSelected}
            onChange= {(event) => handleChangeSelectAll(event)}
          />
          <Button size="sm" variant="danger" onClick={handleDelete}>DELETE</Button>
        </div>
        <div className="d-flex">
          <Pagination/>
        </div>
      </div>

      <Table responsive striped bordered hover variant="dark" size="sm" >
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
                    {
                      checkboxItems.map(item => {
                        if(item.id === person.id){
                          return (
                            <Form.Check 
                              id={`order-${index}`} custom inline 
                              label="" 
                              type="checkbox" 
                              key={`order-${index}`}
                              checked={item.isChecked}
                              onChange={(event) => { handleChangeCheckboxItem(event, person.id)}}
                            />   
                          )
                        }
                        return null
                      })
                    }
                  </td>
                  <td>{ `${person.firstName} ${person.lastName}` }</td>
                  <td>{ person.gender }</td>
                  <td>{ person.nationality }</td>
                  <td>{ person.mobilePhone }</td>
                  <td className="text-right">
                    <Button 
                      id={`edit-${index}`} 
                      className="mr-1" 
                      variant="link"
                      size="sm"
                      onClick={() => dispatch(selectedPerson(person)) }
                    >
                      EDIT
                    </Button>
                    <Button 
                      id={`delete-${index}`} 
                      className="ml-1"
                      variant="link"
                      size="sm"
                      onClick={() => dispatch(deletePersonal(person.id)) }
                    >
                      DELETE
                    </Button>
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