import React from 'react';
import { useSelector } from "react-redux";
import Input from "../components/input"
import UserCard from "../components/userCard";


const Users = () => {
   const users = useSelector(store => store.usersData.users)

   return (
      <>
         <div className="mainInptWrapper">
            <Input class="userInp">
               Enter participant name ...
            </Input>
         </div>
         <div className="cardsContainer">
            {users.map(user => <UserCard user={user} key={user.id}/>)}
         </div>
      </>
   )
}

export default Users;