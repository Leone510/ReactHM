import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { contestsActions } from '../../../../store/contests/actionType.js';
import useRootStore from '../../../../useStore/index.js';
import Button from '../../../Button/Button.jsx';

export const TotalParticipants = () => {
   const {
      currentContest: {
      usersData: {users},
      infoData: {id}
      },
   } = useRootStore();
   const history = useHistory();

   const dispatch = useDispatch();
   const goInDashboard = () => history.push(`/`);

   const handleSetWiner = () => {
      dispatch(contestsActions.changeContest({id: id, users: [...users]}));
      // addContestsToLS(contests);
      goInDashboard();
   }

   return (
      <div className="participantsInfo">
         <div className="modalInfo">
            <h2>TotalParticipants: {users.length}</h2>
         </div>
         <div className="modalButtons">
            <Button 
               click={handleSetWiner}
               class="winBtn"
            >Show winner</Button>
         </div>
      </div>
   )
}

export default TotalParticipants;