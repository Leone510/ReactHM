import React, {useContext}from 'react';
import {StoreContext} from '../store/context';

export const PasswordContainer = () => {
   const {storage, dispatch} = useContext(StoreContext);

   return (
      <>
         <div className="inputWrapper">
            <h3>Password</h3>
            <input 
               type="password"
               onChange={(e) => {
                  dispatch({
                     type: 'SET_PASSWORD', 
                     payload: {
                        name: 'password', 
                        value: e.target.value,
                     }
                  })
               }}
               value={storage.userData.password}
            />
         </div>

         <div className="inputWrapper">
            <h3>Confirm password</h3>
            <input 
               type="password"
               onChange={(e) => {
                  dispatch({
                     type: 'SET_PASSWORD', 
                     payload: {
                        name: 'confirmPass', 
                        value: e.target.value,
                     }
                  })
               }}
               value={storage.userData.confirmPass}
            />
         </div>
      </>
   )
}