// import { getByLabelText } from "@testing-library/react";
import React, {useContext} from "react";
import {StoreContext} from '../../store/context';

const Button = (props) => {
   return (
      <button 
         className="button"
         onClick={props.toDo}
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
                     <input name="name" placeholder='Vasia' defaultValue={storage.userData.name}/>
                  </div>
                  <div className="inputWrapper">
                     <h3>Surname</h3>
                     <input name="surname" placeholder='Piatochkin' defaultValue={storage.userData.surname}/>
                  </div>
                  <div className="inputWrapper">
                     <h3>Email</h3>
                     <input name="email" placeholder='VasiaPiat@mail.com' defaultValue={storage.userData.email}/>
                  </div>
               </form>
            </div>,

            <div className="step_bot">
            <Button 
               toDo={() => {
                  const form = document.forms.userDataOne;
                  dispatch({
                     type: 'DATA_STEP_ONE',
                     payload: {
                        name: form.elements.name.value,
                        surname: form.elements.surname.value,
                        email: form.elements.email.value,
                     }
                  })

                  dispatch({type: 'NEXT_STEP'})
               }}
            >
               NEXT
            </Button>
            </div>
         ]);
      case 2:
         return ([
            <div className="step_mid">
               <form 
               className="step_form"
               name="userDataTwo"
               >
                  <div className="inputWrapper">
                     <h3>City</h3>
                     <input name="town" placeholder='Kharkov' defaultValue={storage.userData.town}/>
                  </div>
                  <div className="inputWrapper">
                     <h3>Street</h3>
                     <input name="street" placeholder='Rudneva str.' defaultValue={storage.userData.street}/>
                  </div>
                  <div className="inputWrapper">
                     <h3>House number</h3>
                     <input name="house" placeholder='23a' defaultValue={storage.userData.house}/>
                  </div>
            </form>
            </div>,

            <div className="step_bot">
               <Button toDo = {() => {dispatch({type: 'PREVIOUS_STEP'})}}>PREVIOUS</Button>
               <Button toDo={() => {
                  const form = document.forms.userDataTwo;
                  dispatch({
                     type: 'DATA_STEP_TWO',
                     payload: {
                        town: form.elements.town.value,
                        street: form.elements.street.value,
                        house: form.elements.house.value,
                     }
                  })

                  dispatch({type: 'NEXT_STEP'})
               }}>NEXT</Button>
            </div>
         ])
      case 3: 
         return (
            <div className="step_bot">
               <Button toDo = {() => {dispatch({type: 'PREVIOUS_STEP'})}}>PREVIOUS</Button>
               <Button toDo={() => {dispatch({type: 'NEXT_STEP'})}}>NEXT</Button>
            </div>
         )
      case 4:
         return (
            <div className="step_bot">
               <Button toDo = {() => {dispatch({type: 'PREVIOUS_STEP'})}}>PREVIOUS</Button>
               <Button toDo={() => {dispatch({type: 'NEXT_STEP'})}}>NEXT</Button>
            </div>
         )
      default:
         return (
            <div>
               <h1>Error!</h1>
            </div>
         )   
   }
}

const Step = (props) => {
   const {storage} = useContext(StoreContext);
   return (
      <div className={`step ${props.class}`}>
         <div className="step_top">
            <h1>Step: {storage.step}</h1>
         </div>
         <StepMid/>
      </div>
   )
}
export default Step;