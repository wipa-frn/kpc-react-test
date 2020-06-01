export const CREATE = 'CREATE'; 
export const UPDATE = 'UPDATE'; 
export const DELETE = 'DELETE'; 

export const createPersonal = (personal) => {
  return {
    type: CREATE,
    text: 'Create personal successfully',
    personal: personal
  }
}

export const updatePersonal = (id, personal) => {
  return {
    type: UPDATE,
    text: 'Update personal successfully',
    id: id,
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
