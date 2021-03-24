import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Input from "../components/input"
import UserCard from "../components/userCard";
import { usersActions } from '../store/users/actionType';
import useLocalStorage from '../useLocalStorage';
import useSort from '../useSort';

const Users = () => {
   const{getUsersLS} = useLocalStorage();
   const users = useSelector(store => store.usersData.users);
   const dispatch = useDispatch();
   const {getSorted, setSortUsers} = useSort(users);

   useEffect(() => {
      dispatch(usersActions.setUsersArr(getUsersLS()));
   }, []);

   const handleSort = (e) => {
      setSortUsers(e.target.value);
   } 

   return (
      <>
         <div className="mainInptWrapper">
            <Input 
               class="userInp"
               onInp={handleSort}
            >
               Enter participant name, surname or ID...
            </Input>
         </div>
         <div className="cardsContainer">
            {
               Array.isArray(getSorted()) ? getSorted().map(user => <UserCard user={user} key={user.id}/>) :
               <h1>Users not found</h1>
            }
           
         </div>
      </>
   )
}

export default Users;