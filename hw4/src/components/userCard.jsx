import React from 'react';
import { parseTimer } from '../parser';
import Button from "./button"

const UserCard = (props) => {
   return (
      <div className="userCard">
         <div className="cardData">
            <h3>{`ID: ${props.user.id}`}</h3>
            <h3>{`Name: ${props.user.name}`}</h3>
            <h3>{`Time: ${parseTimer(props.user.time)}`}</h3>
         </div>
         <div className="cardFooter">
            <Button class="cardBtn">Delete</Button>
         </div>
      </div>
   )
}

export default UserCard;