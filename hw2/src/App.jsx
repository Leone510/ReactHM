import React, {useState, useEffect} from 'react';
import './App.css';
import './normalize.css';
import './style.css';

let r = 0

const TimerBox = ({status}) => {
  const [timer, setTimer] = useState(0);

  const changeTime = () => setTimer(timer+1)

  
  useEffect(() => {
    const t = setInterval(() => {
      changeTime();
    }, 2000);
    return () => clearInterval(t)
  }, []);

  console.log(r++);


  return (
    <div className="timerBox">
      <h1>{timer}</h1>
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

// ------------------- App ------------------------------

const App = () => {
  const [timerStatus, setTimerStatus] = useState('Stop')
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

  const switchTimer = (btn) => {
    if (btn === `Start`) {
      setTimerStatus('Start')
      console.log(1)
    }
  }

  return (
    <div className="App">
      <main>
        {
          timerStatus === `Start` ? (
            <div className="timerBox">
              <h1>00:00:00</h1>
            </div>
          ) : 
          <TimerBox/>
        }
        <div className="buttonsBox">
          {btnsArr.map(btn => {
            return (
              <Button 
                color={btn.color} 
                key={`btn_${btn.color}`}
                switchTimer={() => switchTimer}
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
