import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { parseTimer } from '../parser';
import { winerActions } from '../store/infoData/actionType';
import useWinner from '../useWinner';
import Button from './button';

const WinnerModal = () => {
   const users = useSelector(store => store.usersData.users);
   const {getWinner} = useWinner(users);

   const dispatch = useDispatch();

   const handleShowParticipants = () => {
      dispatch(winerActions.setShowWiner(false))
   }

   return (
      <div className="winModal">
         <h2 className="winTitle">The winner</h2>
         <div className="winnerInfo">
            <h3>{`ID: ${getWinner().id}`}</h3>
            <h3>{`Name: ${getWinner().name}`}</h3>
            <h3>{`Surname: ${getWinner().surname}`}</h3>
            <h3>{`Time: ${parseTimer(getWinner().time)}`}</h3>
         </div>
         <Button
            class="participantsBtn"
            click={handleShowParticipants}
         >Show participants</Button>
      </div>
   )
}

export default WinnerModal;