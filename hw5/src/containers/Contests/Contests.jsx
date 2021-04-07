import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Button from '../../components/Button/Button';
import ContestCard from '../../components/ContestCard/ContestCard';
import Input from '../../components/Input/Input';
import { contestsActions } from '../../store/contests/actionType';
import useLocalStorage from '../../useLocalStorage';
import useSort from '../../useSort';

const Contests = () => {
   const contests = useSelector(store => store.contests.contests);

   const {getContestsFromLS} = useLocalStorage();

   const {getSorted, setSortUsers} = useSort(contests);
   const dispatch = useDispatch();

   const history = useHistory();

   useEffect(() => {
      const contests = getContestsFromLS();
      dispatch(contestsActions.setContests(contests));
   }, [])

   const handleSort = (e) => {
      setSortUsers(e.target.value);
   }

   const goInCreateContest = () => history.push(`/create`);

   return (
      <div className="contestsWrapper">
         <div className="controlPanel">
            <Input 
               class="userInp"
               onInp={handleSort}
            >
               Enter contest name...
            </Input>
            <Button class="createContest" click={goInCreateContest}>
               Create contest
            </Button>
         </div>
         
         <div className="cardsContainer">
            {
               Array.isArray(getSorted()) ? getSorted().map(contest => <ContestCard key={contest.id} {...contest}/>) :
               <h1>Contests not found</h1>
            }
         </div>
      </div>
   )
}

export default Contests;