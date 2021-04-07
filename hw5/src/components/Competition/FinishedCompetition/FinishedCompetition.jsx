import React from 'react';
import UserCard from '../../UserCard/UserCard.jsx';
import {parseTimer} from '../../../functions/parser/index'
import useRootStore from '../../../useStore/index.js';

const FinishedCompetition = () => {
   const {currentContest} = useRootStore();

   const {
      infoData: {id, name, winner},
      usersData: {users}
   } = currentContest;
   console.log(winner)

   return (
      <div className="finishedContainer">
         <div className="resultInfo">
            <h2>{`ID: ${id}`}</h2>
            <h2>{`Name: ${name}`}</h2>
            <h2>{`Winner ${winner.name} ${winner.surname}`}</h2>
            <h2>{`Time ${parseTimer(winner.time)}`}</h2>
         </div>
         <div className="resultParticipants">
            {users.map(user => <UserCard key={user.id} user={user}/>)}
         </div>
      </div>
   )
}

export default FinishedCompetition;