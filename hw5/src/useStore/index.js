import { useSelector } from "react-redux"

const useRootStore = () => {
   const contests = useSelector(store => store.contests.contests)
   const currentContest = useSelector(store => store.currentContest);
   const userData = useSelector(store => store.currentContest.usersData);
   const participant = useSelector(store => store.currentContest.participant);

   const getContest = (id) => contests.find(contest => contest.id === id);

   return {
      contests,
      currentContest,
      userData,
      participant,
      getContest,
   }
}

export default useRootStore;