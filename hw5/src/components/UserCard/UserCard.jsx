import React from 'react';
import { useDispatch } from 'react-redux';
import { parseTimer } from '../../functions/parser';
import { contestsActions } from '../../store/contests/actionType';
import useRootStore from '../../useStore';
import Button from '../Button/Button';

const UserCard = ({user}) => {
   const dispatch = useDispatch();
   const {currentContest: {infoData: {id}}} = useRootStore();

   const handleDeleteUser = () => {
      dispatch(contestsActions.deleteUser({id: id, userId: user.id}));
   }

   return (
      <div className="userCard">
         <div className="cardData">
            <h3>{`ID: ${user.id}`}</h3>
            <h3>{`Name: ${user.name}`}</h3>
            <h3>{`Surname: ${user.surname}`}</h3>
            <h3>{`Time: ${parseTimer(user.time)}`}</h3>
         </div>
         <div className="cardFooter">
            <Button
               class="cardBtn"
               click={handleDeleteUser}
            >Delete</Button>
         </div>
      </div>
   )
}

export default UserCard;