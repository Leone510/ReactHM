import React, {useContext}from 'react';
import {StoreContext} from '../store/context';
import avatarsSrc from '../avatarsSrc'

export const Avatars = () => {
   const {storage, dispatch} = useContext(StoreContext);
   console.log(storage.userData.avatar)

   return [
      avatarsSrc.map(avatar => {

         return (
            <div 
               key={avatar}
               className={`avatar ${storage.userData.avatar === avatar && "choosen"}`}
               onClick={() => {
                  dispatch({type: 'CHOOSEN_AVATAR', payload: {avatar}})
               }}
            >
               <img src={avatar}/>
            </div>
         )
      })
   ]
}

