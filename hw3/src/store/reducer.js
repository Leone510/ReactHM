export const storageStates = {
  step: 1,
  userData: {
    name: '',
    surname: '',
    email: '',
    town: '',
    street: '',
    house: '',
    avatar: '',
    password: '',
  }
}
 
export const reducer = (storage, action) => {
  if (action.type === 'NEXT_STEP') {
    return {...storage, step: storage.step + 1};
  }
  if (action.type === 'PREVIOUS_STEP') {
    return {...storage, step: storage.step - 1};
  }
  if (action.type === 'DATA_STEP_ONE') {
    return ({...storage, userData: { 
      ...storage.userData,
      name: action.payload.name,
      surname: action.payload.surname,
      email: action.payload.email,
    }});
  }
  if (action.type === 'DATA_STEP_TWO') {
    return ({...storage, userData: { 
      ...storage.userData,
      town: action.payload.town,
      street: action.payload.street,
      house: action.payload.house,
    }});
  }


  return storage;
}