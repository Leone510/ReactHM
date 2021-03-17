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
    confirmPass: '',
  }
}
 
export const reducer = (storage, action) => {
  if (action.type === 'NEXT_STEP') {
    return {...storage, step: storage.step + 1};
  }
  if (action.type === 'PREVIOUS_STEP') {
    return {...storage, step: storage.step - 1};
  }

  if (action.type === 'SET_USER_DATA') {
    return {
      ...storage, 
      userData: {
        ...storage.userData, 
        [action.payload.name]: action.payload.value
      }
    }
  }
  
  // if (action.type === 'DATA_STEP_ONE') {
  //   return ({...storage, userData: { 
  //     ...storage.userData,
  //     name: action.payload.name,
  //     surname: action.payload.surname,
  //     email: action.payload.email,
  //   }});
  // }
  
  // if (action.type === 'DATA_STEP_TWO') {
  //   return ({...storage, userData: { 
  //     ...storage.userData,
  //     town: action.payload.town,
  //     street: action.payload.street,
  //     house: action.payload.house,
  //   }});
  // }
  
    if (action.type === 'CHOOSEN_AVATAR') {
      return {
        ...storage, 
        userData: {
          ...storage.userData, 
          avatar: action.payload.avatar
        }
      }
    }

    if (action.type === 'SET_PASSWORD') {
      return {
        ...storage,
        userData: {
          ...storage.userData,
          [action.payload.name]: action.payload.value,
        }
      }
    }

  return storage;
}