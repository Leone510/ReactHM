import React from 'react';
import {useHistory } from 'react-router-dom';
import Button from '../Button/Button';

const ContestCard = ({id, name, isActive, winner}) => {
   const history = useHistory();

   const goInContest = () => history.push(`/competition/${id}`);

   const handleClick = () => {
      goInContest();
   }

   return (
      <div className="contestCard">
         <div className="contestCard_info">
            <h3>{`ID: ${id}`}</h3>
            <h3>{`Name: ${name}`}</h3>
            <h3>{`Status: ${isActive ? "active" : "finished"}`}</h3>
            {isActive ? null : <h3>{`Winner: ${winner.name + ' ' + winner.surname}`}</h3>}
         </div>
         <div className="cardBottom">
            <Button 
               type="button" 
               class="button contestCardBtn" 
               click={handleClick} 
            >Show</Button>
         </div>
      </div>
   )
}

export default ContestCard;