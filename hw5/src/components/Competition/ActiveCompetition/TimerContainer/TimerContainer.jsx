import React from 'react';
import { participantActions } from '../../../../store/currentContest/participant/actionType.js';
import useRootStore from '../../../../useStore/index.js';
import { useDispatch} from 'react-redux';
import Button from '../../../Button/Button.jsx';
import Timer from '../Timer/Timer.jsx';
import { parseTimer } from '../../../../functions/parser/index.js';
import { contestsActions } from '../../../../store/contests/actionType.js';

const TimerContainer = () => {
   const {
      currentContest: {infoData: {id: contestId}},

      participant: {
         timerState, 
         time, 
         currentUser: participant
   }} = useRootStore();

   const dispatch = useDispatch();

   const handleSetTimerState = (e) => {
      e.target.name === 'initial' ? (
         dispatch(participantActions.timerState({name: e.target.name, time: 0}))
      ) : dispatch(participantActions.timerState({name: e.target.name, time: time}));
   }

   const handleCancel = () => {
      dispatch(participantActions.cancel());
   }

   const handleSave = () => {
      dispatch(contestsActions.addUser({contestId: contestId, userValue: {...participant, time: time}}))
      dispatch(participantActions.cancel());
   }

   return (
      <div className="timerContainer">
         <div className="timerInfo">
            <h1>Participant</h1>
            <div className="participantInfo">
               <p>{`ID: ${participant.id}`}</p>
               <p>{`Participant: ${participant.name} ${participant.surname}`}</p>
            </div>
         </div>

         <div className="timerBox">
            <div className="timerWrapper">
               {timerState === 'run'? <Timer/> : <h1>{parseTimer(time)}</h1>}
            </div>
            <div className="buttonsWrapper">
            <Button
               name="run"
               type="button"
               class={`timerBtn green`}
               click={handleSetTimerState}
               disabled={timerState !== "initial"}
            >Start</Button>
            <Button
               name="stop"
               type="button"
               class="timerBtn red"
               click={handleSetTimerState}
               disabled={timerState !== "run"}
            >Stop</Button>
            <Button
               name="initial"
               type="button"
               class="timerBtn orange"
               click={handleSetTimerState}
               disabled={timerState !== "stop"}
            >Reset</Button>
            </div>
         </div>

         <div className="timerFooter">
            <Button
               type="button"
               class="timerFooterBtn"
               disabled={false}
               click={handleCancel}
            >Cancel</Button>
            <Button
               type="button"
               class="timerFooterBtn"
               disabled={(timerState !== "stop") || (time === 0)}
               click={handleSave}
            >Save</Button>
         </div>
      </div>
   )
}

export default TimerContainer;