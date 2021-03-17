import React from 'react';
import TotalParticipants from "../components/totalParticipants"
import WinnerModal from "../components/winnerModal"
import { useSelector } from 'react-redux';


const InfoData = () => {
      const isShowWinner = useSelector(store => store.infoData.showWinner);

      return (
            isShowWinner ? <WinnerModal/> : <TotalParticipants/>
      )          
}

export default InfoData;