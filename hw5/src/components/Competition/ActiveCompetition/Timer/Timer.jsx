import React, { useEffect } from 'react';
import { parseTimer } from '../../../../functions/parser';
import { participantActions } from '../../../../store/currentContest/participant/actionType';
import { useDispatch, useSelector } from 'react-redux';

const Timer = () => {
   const {time} = useSelector(store => store.currentContest.participant);

   const dispatch = useDispatch();

   useEffect(() => {
      const timer = setInterval(() => {
         dispatch(participantActions.timeChange());
      }, 1000);

      return () => clearInterval(timer);
   }, [])

   return (
      <h1>{parseTimer(time)}</h1>
   );
}

export default Timer;