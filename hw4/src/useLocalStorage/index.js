import { useSelector } from "react-redux";

const useLocalStorage = () => {
   const users = useSelector(store => store.usersData.users);

   const addUserToLS = (user) => {
      const usersToLS = JSON.stringify([...users, user]);
      localStorage.setItem("users", usersToLS);
   }

   const removUserFromLS = (id) => {
      const newUsersArr = users.filter(user => user.id !== id);
      localStorage.setItem("users", JSON.stringify(newUsersArr));
   }

   const getUsersLS = () => {
      const usersFromLS = localStorage.getItem('users');
      return (usersFromLS !== null) ?  JSON.parse(usersFromLS) : [];
   }

   return {
      addUserToLS,
      removUserFromLS,
      getUsersLS,
   }
}
export default useLocalStorage;