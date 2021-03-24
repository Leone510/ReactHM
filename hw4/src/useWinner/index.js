import { useEffect, useState } from "react"

const useWinner = (users) => {
   const [winner, setWinner] = useState({});

   useEffect(() => {
      let minTimeUser = {time: 9999};

      users.forEach(user => {
         user.time < minTimeUser.time && (minTimeUser = {...user})
      })

      setWinner(minTimeUser);

   }, [users])

   const getWinner = () => {
      return winner;
   }

   return {
      getWinner,
   }
}

export default useWinner;