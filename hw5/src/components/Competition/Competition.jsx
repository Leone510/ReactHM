import React, { useEffect, useState } from 'react';
import FinishedCompetition from './FinishedCompetition/FinishedCompetition.jsx';
import ActiveCompetition from './ActiveCompetition/ActiveCompetition';
import useRootStore from '../../useStore/index.js'
import { useDispatch } from 'react-redux';
import { winerActions } from '../../store/currentContest/infoData/actionType.js';
import { usersActions } from '../../store/currentContest/users/actionType.js';
import useLocalStorage from '../../useLocalStorage/index.js';

const Competition = ({id}) => {
   const {getContest, contests} = useRootStore();
   const dispatch = useDispatch();

   const {name, isActive, winner, users} = getContest(Number(id));
   const [contest, setContest] = useState()

   useEffect(() => {
      if (!!id) {
         dispatch(winerActions.setWinnerContest({
            id: Number(id),
            name: name,
            isActive: isActive, 
            winner: winner
         }));
      }  
   }, [])

   useEffect(() => {
      if (!!id) {
         dispatch(usersActions.setUsersArr([...users]))
      }
   }, [users])

   return(
     isActive ? <ActiveCompetition/> : <FinishedCompetition/>
   )
}

export default Competition;