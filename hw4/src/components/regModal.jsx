import React from 'react';
import Button from '../components/button.jsx';
import Input from '../components/input.jsx';
import {useDispatch} from 'react-redux';
import { particiantActions } from '../store/particiant/actionType.js';

const RegModal = () => {
   const dispatch = useDispatch();

   const handleSetCurrenUser = (e) => {
      e.preventDefault();
     
      const form = e.currentTarget;
      const currentUser = {
         name: form['fName'].value,
         surname: form['sName'].value,
      }
      
      dispatch(particiantActions.currentUser(currentUser));
   }

   return (
      <div className="regWrapper">
         <div className="regTitle">
            <h1>Registration user</h1>
         </div>

         <form 
            className="regForm" 
            name="regUser" 
            onSubmit={handleSetCurrenUser}
         >
            <label>
               <h2>First name</h2>
               <Input class="regInp" name="fName" type="text">
                  Enter first name...
               </Input>
            </label>

            <label>
               <h2>Second name</h2>
               <Input class="regInp" name="sName" type="text">
                  Enter second name...
               </Input>
            </label>

            <Button
               class="regBtn" 
               type="submit"
            >Register participant</Button>
         </form>
      </div>
   )
}

export default RegModal;