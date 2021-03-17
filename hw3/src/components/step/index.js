// import { getByLabelText } from "@testing-library/react";
import React, {useContext} from "react";
import {StoreContext} from '../../store/context';
import {Avatars} from '../avatars.jsx'
import {PasswordContainer} from '../passwordContainer.jsx'

const Button = (props) => {
   return (
      <button 
         className={`button + ${props.className}`}
         onClick={props.toDo}
         disabled={props.disabled}
      >
         {props.children}
      </button>
   )
}

const StepMid = () => {
   const {storage, dispatch} = useContext(StoreContext);

   switch (storage.step) {
      case 1:
         return ([
            <div className="step_mid">
               <form 
               className="step_form"
               name="userDataOne"
               >
                  <div className="inputWrapper">
                     <h3>Name</h3>
                     <input 
                        type="text"
                        name="name" 
                        placeholder='Vasia' 
                        value={storage.userData.name} 
                        onChange={(e) => {dispatch(
                           {
                              type: 'SET_USER_DATA',
                              payload: {
                                 name: 'name',
                                 value: e.target.value,
                              }
                           })}}

                     />
                  </div>
                  <div className="inputWrapper">
                     <h3>Surname</h3>
                     <input 
                        type="text"
                        name="surname" 
                        placeholder='Piatochkin' 
                        value={storage.userData.surname} 
                        onChange={(e) => {dispatch(
                           {
                              type: 'SET_USER_DATA',
                              payload: {
                                 name: 'surname',
                                 value: e.target.value,
                              }
                           })}}
                     />
                  </div>
                  <div className="inputWrapper">
                     <h3>Email</h3>
                     <input 
                        type="text"
                        name="email" 
                        placeholder='VasiaPiat@mail.com' 
                        value={storage.userData.email} 
                        onChange={(e) => {dispatch(
                           {
                              type: 'SET_USER_DATA',
                              payload: {
                                 name: 'email',
                                 value: e.target.value,
                              }
                           })}}
                     />
                  </div>
               </form>
            </div>,

            <div className="step_bot">
            <Button 
               toDo={() => {dispatch({type: 'NEXT_STEP'})}}
            >
               Next
            </Button>
            </div>
         ]);
      case 2:
         console.log(storage.userData)
         return ([
            <div className="step_mid">
               <form 
               className="step_form"
               name="userDataTwo"
               >
                  <div className="inputWrapper">
                     <h3>City</h3>
                     <input 
                        type="text"
                        name="town" 
                        placeholder='Kharkov'
                        value={storage.userData.town} 
                        onChange={(e) => {dispatch(
                           {
                              type: 'SET_USER_DATA',
                              payload: {
                                 name: 'town',
                                 value: e.target.value,
                              }
                           })}} 
                     />
                  </div>
                  <div className="inputWrapper">
                     <h3>Street</h3>
                     <input 
                        type="text"
                        name="street" 
                        placeholder='Rudneva str.' 
                        value={storage.userData.street} 
                        onChange={(e) => {dispatch(
                           {
                              type: 'SET_USER_DATA',
                              payload: {
                                 name: 'street',
                                 value: e.target.value,
                              }
                           })}}
                     />
                  </div>
                  <div className="inputWrapper">
                     <h3>House number</h3>
                     <input 
                        type="text"
                        name="house" 
                        placeholder='23a' 
                        value={storage.userData.house} 
                        onChange={(e) => {dispatch(
                           {
                              type: 'SET_USER_DATA',
                              payload: {
                                 name: 'house',
                                 value: e.target.value,
                              }
                           })}}/>
                  </div>
            </form>
            </div>,

            <div className="step_bot">
               <Button toDo = {() => {dispatch({type: 'PREVIOUS_STEP'})}}>Previous</Button>
               <Button toDo={() => {dispatch({type: 'NEXT_STEP'})
               }}>Next</Button>
            </div>
         ])
      case 3: 
         return (
            <>
               <div className="avatars_container">
                  <Avatars/>
               </div>

               <div className="step_bot">
                  <Button toDo = {() => {dispatch({type: 'PREVIOUS_STEP'})}}>Previous</Button>
                  <Button toDo={() => {dispatch({type: 'NEXT_STEP'})}}>Next</Button>
               </div>
            </>
         )
      case 4:
         return (
            <>
               <div className="password_container">
                  <PasswordContainer/>
               </div>

               <div className="step_bot">
                  <Button toDo = {() => {dispatch({type: 'PREVIOUS_STEP'})}}>Previous</Button>
                  <Button 
                     toDo={() => {dispatch({type: 'NEXT_STEP'})}}
                     disabled={
                        (storage.userData.password !== storage.userData.confirmPass) || 
                        (storage.userData.password === '')
                     }
                  >Submit</Button>
               </div>
            </>
         )
      default:
         return (
            <div className="userInfo">
               <div className="avatarWrapper">
                  <img 
                     className='avatar'
                     src={storage.userData.avatar}
                  />
               </div>
               <h3>Contact Information</h3>
               <div className="dataUser">
                  <p>Name: {storage.userData.name}</p>
                  <p>Surname: {storage.userData.surname}</p>
                  <p>Email: {storage.userData.email}</p>
                  <p>Sity: {storage.userData.town}</p>
                  <p>Street: {storage.userData.street}</p>
                  <p>Building: {storage.userData.house}</p>
               </div>
            </div>
         )   
   }
}

const Step = (props) => {
   const {storage} = useContext(StoreContext);
   return (
      <div className={`step ${props.class}`}>
         <div className="step_top">
         {
            storage.step < 5 ? 
            <h1>Step: {storage.step}</h1> :
            <h2>
               Thank you for registering
            </h2>
         }
         </div>
         <StepMid/>
      </div>
   )
}
export default Step;