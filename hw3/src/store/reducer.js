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
   return storage;
 }