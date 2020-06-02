export const CREATE = 'CREATE'; 
export const UPDATE = 'UPDATE'; 
export const DELETE = 'DELETE'; 
export const DELETE_ALL = 'DELETE_ALL'; 

export const createPersonal = (personal) => {
  return {
    type: CREATE,
    text: 'Create personal successfully',
    personal: personal
  }
}

export const updatePersonal = (personal) => {
  return {
    type: UPDATE,
    text: 'Update personal successfully',
    personal: personal
  }
}

export const deletePersonal = (id) => {
  return {
    type: DELETE,
    text: 'Delete personal successfully',
    id: id
  }
}

export const deleteWithSelectedPersonal = (idList) => {
  return {
    type: DELETE_ALL,
    text: 'Delete all personal successfully',
    idList: idList
  }
}
