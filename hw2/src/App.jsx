import React, {useState, useEffect} from 'react';
import './App.css';
import './normalize.css';
import './style.css';

// const TimerBox = ({status}) => {
//   const [timer, setTimer] = useState(0);

//   const changeTime = () => setTimer(timer+1)
  
//   useEffect(() => {
   
//     const interval = setInterval(() => {
//       changeTime();
//     }, 2000);

//     return () => clearInterval(interval)
//   }, [timer]);

//   return (
//     <div className="timerBox">
//       <h1>{timer}</h1>
//     </div>
//   )
// }

// const Button = (props) => {
//   return (
//     <div 
//       className={"button" + ` ${props.color}`}
//     >
//       <p className="btnTitle">
//         {props.children}
//       </p>
//     </div>
//   )
// }

// ------------------- App ------------------------------

// const App = () => {
//   const [timerStatus, setTimerStatus] = useState('Stop')
//   const [btnsArr, setBtnsArr] = useState(
//     [
//       {
//         title: 'Start',
//         color: 'btnGreen',
//       },
//       {
//         title: 'Stop',
//         color: 'btnRed',
//       },
//       {
//         title: 'Reset',
//         color: 'btnOrange',
//       },
//     ]
//   )

//   const switchTimer = (btn) => {
//     if (btn === `Start`) {
//       setTimerStatus('Start');
//       console.log('sss')
//     }
//   }

//   return (
//     <div className="App">
//       <main>
//         {
//           timerStatus === `Stop` ? (
//             <div className="timerBox">
//               <h1>00:00:00</h1>
//             </div>
//           ) : 
//           <TimerBox status={timerStatus}/>
//         }
//         <div className="buttonsBox">
//           {btnsArr.map(btn => {
//             return (
//               <Button 
//                 color={btn.color} 
//                 key={`btn_${btn.color}`}
//                 onClick={() => switchTimer(btn.color)}
//               >
//                 {btn.title}
//               </Button>
//             )
//           })}
//         </div>
//         <div className="timeListBox"></div>
//       </main>
//     </div>
//   );
// }

//------------ Second variant --------------------------------

const App = () => {
  const [timer, setTimer] = useState(0);
  const [timerStatus, setTimerStatus] = useState('Stop');
  const [btnsArr, setBtnsArr] = useState(
    [
      {
        title: 'Start',
        color: 'btnGreen',
      },
      {
        title: 'Stop',
        color: 'btnRed',
      },
      {
        title: 'Reset',
        color: 'btnOrange',
      },
    ]
  )
  
  const timerStep = () => {
    setTimer(timer + 1)
  }

  const parserTimer = (num) => {
    const sec = num%60;
    const min = num/60%60;
    const hour =num/60/60%60;

    return `${hour}:${min}:${sec}`;
  }

  const TimerBoxStop = () => {
    return (
      <div className="timerBox">
        <h1>{parserTimer(timer)}</h1>
      </div>
    )
  }

  const TimerBoxRun = () => {
    useEffect(() => {
      const interval = setInterval(() => {
        timerStep();
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="timerBox">
        <h1>{parserTimer(timer)}</h1>
      </div>
    )
  }

  const Button = (props) => {
    return (
      <div 
        className={"button" + ` ${props.color}`}
      >
        <p className="btnTitle">
          {props.children}
        </p>
      </div>
    )
  }

  return (
    <div className="App">
       <main>
          {
            timerStatus === "Stop" ?
            <TimerBoxStop/> :
            <TimerBoxRun/>
          }
        <div className="buttonsBox">
          {btnsArr.map(btn => {
            return (
              <Button 
                color={btn.color} 
                key={`btn_${btn.color}`}
              >
                {btn.title}
              </Button>
            )
          })}
        </div>
        <div className="timeListBox"></div>
      </main>
    </div>
  );
}

export default App;
