export const CREATE = 'CREATE'; 
export const DELETE = 'DELETE'; 

export const createPersonal = (personal) => {
  return {
    type: CREATE,
    text: 'Create personal successfully',
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
