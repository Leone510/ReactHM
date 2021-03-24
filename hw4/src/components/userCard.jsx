import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { parseTimer } from '../parser';
import { usersActions } from '../store/users/actionType';
import useLocalStorage from '../useLocalStorage';
import Button from "./button"

const UserCard = (props) => {
   const dispatch = useDispatch();
   const {removUserFromLS} = useLocalStorage();

   return (
      <div className="userCard">
         <div className="cardData">
            <h3>{`ID: ${props.user.id}`}</h3>
            <h3>{`Name: ${props.user.name}`}</h3>
            <h3>{`Surname: ${props.user.surname}`}</h3>
            <h3>{`Time: ${parseTimer(props.user.time)}`}</h3>
         </div>
         <div className="cardFooter">
            <Button 
               class="cardBtn"
               click={() => {
                  removUserFromLS(props.user.id);
                  dispatch(usersActions.deleteUser(props.user.id))
               }}
            >Delete</Button>
         </div>
      </div>
   )
}

export default UserCard;