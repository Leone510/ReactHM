import React from 'react';
import Input from "../../../Input/Input.jsx"
import UserCard from "../../../UserCard/UserCard.jsx";
import useSort from '../../../../useSort';
import useRootStore from "../../../../useStore/index.js";

const Users = () => {
   const {userData: {users}} = useRootStore();

   const {getSorted, setSortUsers} = useSort(users);

   const handleSort = (e) => {
      setSortUsers(e.target.value);
   } 

   return (
      <>
         <div className="mainInptWrapper">
            <Input 
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