// import { getByLabelText } from "@testing-library/react";
import React, {useContext} from "react";
import {StoreContext} from '../../store/context';

const Input = (props) => {
   const {storage, dispatch} = useContext(StoreContext);
   return (
      <label>
         {props.children}
         <input 
            className={props.class}
            placeholder={props.placeholder}
         />
      </label>
   )
}

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
         return (
            <form 
               className="step_form"
               name="userData"
            >
               <label>
                  Name:
                  <Input
                     placeholder='Vasia'
                  />
               </label>
            </form>
         );
      case 2:
         return (
            <div className="step_bot">
               <Button toDo = {() => {dispatch({type: 'PREVIOUS_STEP'})}}>PREVIOUS</Button>
               <Button toDo={() => {dispatch({type: 'NEXT_STEP'})}}>NEXT</Button>
            </div>
         )
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

const StepBot = () => {
   const {storage, dispatch} = useContext(StoreContext);

   switch (storage.step) {
      case 1:
         return (
            <div className="step_bot">
               <Button toDo={() => {dispatch({type: 'NEXT_STEP'})}}>NEXT</Button>
            </div>
         );
      case 2:
         return (
            <div className="step_bot">
               <Button toDo = {() => {dispatch({type: 'PREVIOUS_STEP'})}}>PREVIOUS</Button>
               <Button toDo={() => {dispatch({type: 'NEXT_STEP'})}}>NEXT</Button>
            </div>
         )
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
            <h1>Шаг: {storage.step}</h1>
         </div>
         <StepMid/>
         <StepBot/>
      </div>
   )
}
export default Step;