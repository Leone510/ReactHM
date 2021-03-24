import React from 'react';
import { useSelector } from 'react-redux';
import RegModal from '../components/regModal.jsx';
import TimerContainer from '../components/timerContainer.jsx';

const Registration = () => {
   const isReg = useSelector(store => store.participant.isReg)

   return (
      isReg ? <RegModal/> : <TimerContainer/>
   );
}

export default Registration;