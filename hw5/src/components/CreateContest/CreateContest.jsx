import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { contestsActions } from "../../store/contests/actionType";
import useSetContests from "../../useSetContests"
import Button from "../Button/Button"
import Input from "../Input/Input"

const CreateContest = () => {
   const {createContest} = useSetContests();
   const history = useHistory();
   const dispatch = useDispatch();

   const handleClick = (e) => {
      e.preventDefault();
      dispatch(contestsActions.createContests(createContest(e.target.elements.title.value)))
      history.push('/')
   }

   return (
      <div className="createContestContainer">
         <form 
            className="createContestBox"
            onSubmit={handleClick}
         >
            <div className="cCTitle">
               <h1>Create contest</h1>
            </div>
            <div className="cCInpBox">
               <h3>Contest name</h3>
               <Input name="title"></Input>
            </div>
            <div className="cCBtnBox">
               <Button type="submit"><h2>Create</h2></Button>
            </div>
         </form>
      </div>
   )
}

export default CreateContest;