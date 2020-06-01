export const CREATE = 'CREATE'; 
export const DELETE = 'DELETE'; 

export const createPersonal = (personal) => {
  return {
    type: CREATE,
    text: 'Create personal successfully',
    personal: personal
  }
}
export const deletePersonal = () => {
  return {
    type: CREATE,
    text: 'Delete personal successfully'
  }
}
