import { useEffect } from "react";
import useRootStore from "../useStore";


const useLocalStorage = () => {
   const {contests} = useRootStore();

   useEffect(() => {
      if (!!contests[0]) {
         const contestsToLS = JSON.stringify(contests);
         localStorage.setItem('contests', contestsToLS);
      }
   }, [contests])

   const addContestsToLS = () => {
      const contestsToLS = JSON.stringify(contests);
      localStorage.setItem('contests', contestsToLS);
   }

   const removDataFromLS = (id) => {
      const newUsersArr = contests.filter(user => user.id !== id);
      localStorage.setItem("users", JSON.stringify(newUsersArr));
   }

   const getContestsFromLS = () => {
      const contestsFromLS = localStorage.getItem('contests');
      return (contestsFromLS !== null) ?  JSON.parse(contestsFromLS) : [];
   }

   return {
      addContestsToLS,
      removDataFromLS,
      getContestsFromLS,
   }
}
export default useLocalStorage;