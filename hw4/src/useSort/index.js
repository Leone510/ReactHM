import { useEffect, useState } from "react";

const useSort = (users) => {
   const [sortValue, setSorValue] = useState('');
   const [sortedUsers, setSortedUsers] = useState([...users]);

   useEffect(() => {
      if (!sortValue) {
         console.log(sortValue)
         setSortedUsers([...users])
      } else if (!isNaN(sortValue)) {
         console.log(sortValue)
         setSortedUsers(users.filter(user => String(user.id).includes(sortValue)));
      } else {
         setSortedUsers(users.filter(user => {
            const string = user.name.toLowerCase() + user.surname.toLowerCase();
            return string.includes(sortValue.toLowerCase())
         }));
      }
   }, [users, sortValue]);

   const getSorted = () => {
      return sortedUsers;
   }

   const setSortUsers = (value) => {
      setSorValue(value);
   }

   return {
      getSorted,
      setSortUsers,
   }
} 

export default useSort;