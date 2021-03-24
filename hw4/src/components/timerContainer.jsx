import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { parseTimer } from '../parser';
import { winerActions } from '../store/infoData/actionType';
import { participantActions } from '../store/participant/actionType';
import { usersActions } from '../store/users/actionType';
import useLocalStorage from '../useLocalStorage';
import Button from './button';
import Timer from './timer';

const TimerContainer = () => {
   const {addUserToLS} = useLocalStorage();
   const participant = useSelector(store => store.participant.currentUser);
   const timerState = useSelector(store => store.participant.timerState);
   const time = useSelector(store => store.participant.time);

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
      dispatch(usersActions.addUser({...participant, time: time}));

      addUserToLS({...participant, time: time});
      
      dispatch(participantActions.cancel());

      dispatch(winerActions.setShowWiner(false))

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