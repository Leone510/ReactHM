import React from 'react';
import { useSelector } from 'react-redux';
import RegModal from '../components/regModal.jsx'
import Timer from '../components/timer.jsx'

const Registration = () => {
   const isReg = useSelector(store => store.participant.isReg)

   return (
      !isReg ? <RegModal/> : <Timer/>
   );
}

export default Registration;