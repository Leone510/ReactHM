import { useDispatch } from "react-redux";
import { generateId } from "../functions/generateId/generateId";

const useSetContests = () => {
   const createContest = (data) => {
      return {
         id: generateId(),
         name: data,
         isActive: true,
         isReg: true,
         winner: {},
         participant: {},
         users: [],
      }
   }

   return {
      createContest,
   }
}

export default useSetContests;