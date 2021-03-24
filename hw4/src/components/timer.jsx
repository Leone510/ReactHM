import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { parseTimer } from '../parser';
import { participantActions } from '../store/participant/actionType';

const Timer = () => {
   const time = useSelector(store => store.participant.time);

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