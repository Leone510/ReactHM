import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { winerActions } from '../store/infoData/actionType';
import Button from './button';

export const TotalParticipants = () => {
   const participantsArr = useSelector(store => store.usersData.users);

   const dispatch = useDispatch();

   const handleShowWiner = () => {
      dispatch(winerActions.setShowWiner(true));
   }

   return (
      <div className="participantsInfo">
         <div className="modalInfo">
            <h2>TotalParticipants: {participantsArr.length}</h2>
         </div>
         <div className="modalButtons">
            <Button 
               click={handleShowWiner}
               class="winBtn"
            >
               Show winner
            </Button>
         </div>
      </div>
   )
}

export default TotalParticipants;