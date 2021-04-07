import React from 'react';
import useRootStore from '../../../../useStore/index.js';
import RegModal from '../RegModal/RegModal.jsx';
import TimerContainer from '../TimerContainer/TimerContainer.jsx';

const Registration = () => {
   const {participant} = useRootStore();

   return (
      participant.isReg ? <RegModal/> : <TimerContainer/>
   );
}

export default Registration;