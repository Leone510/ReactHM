import React from 'react';
import store from '../store';

export const TotalParticipants = () => {
   return (
      <div className="modalInfo">
         <h2>TotalParticipants: {store.getState().usersData.users.length}</h2>
      </div>
   )
}

export default TotalParticipants;