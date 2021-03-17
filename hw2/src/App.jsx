import React, {useState, useEffect} from 'react';
import './App.css';
import './normalize.css';
import './style.css';
import useSound from 'use-sound';
import clickSound from './sound/ClickSound.mp3';

//------------ Second variant --------------------------------

const App = () => {
  const [timer, setTimer] = useState(0);
  const [timerStatus, setTimerStatus] = useState('Stop');
  const [timeList, setTimeList] = useState([])
  const [btnsArr, setBtnsArr] = useState(
    [
      {
        title: 'Continue',
        color: 'btnPurple',
        display: 'none',
      },
      {
        title: 'Start',
        color: 'btnGreen',
        display: 'flex',
      },
      {
        title: 'Stop',
        color: 'btnRed',
        display: 'flex',
      },
      {
        title: 'Reset',
        color: 'btnOrange',
        display: 'flex',
      },
    ]
  )

// ----------------- UseEffects -----------------------------

  useEffect(() => {
    const timeListFromLS = localStorage.getItem('timeList');
    if (timeListFromLS !== null) {
      setTimeList(JSON.parse(timeListFromLS))
    }
  }, [])

  useEffect(() => {
    if (timerStatus === 'Stop') {
      timer !== 0 && (setBtnsArr(
        [
          {
            title: 'Continue',
            color: 'btnPurple',
            display: 'flex',
          },
          {
            title: 'Start',
            color: 'btnGreen',
            display: 'none',
          },
          {
            title: 'Stop',
            color: 'btnRed',
            display: 'flex',
          },
          {
            title: 'Reset',
            color: 'btnOrange',
            display: 'flex',
          },
        ]
      ))

      if (timer !== 0) {
        const newTimeList = [...timeList, timer]
        localStorage.setItem('timeList', JSON.stringify(newTimeList))
        setTimeList(newTimeList);

      }
    }

    if (timerStatus === 'Reset') {
      setBtnsArr(
        [
          {
            title: 'Continue',
            color: 'btnPurple',
            display: 'none',
          },
          {
            title: 'Start',
            color: 'btnGreen',
            display: 'flex',
          },
          {
            title: 'Stop',
            color: 'btnRed',
            display: 'flex',
          },
          {
            title: 'Reset',
            color: 'btnOrange',
            display: 'flex',
          },
        ]
      )

      setTimer(0)
      const newTimeList = [...timeList, timer]
      localStorage.setItem('timeList', JSON.stringify(newTimeList))
      setTimeList(newTimeList);
    }

  }, [timerStatus])
  
// ----------------- Components -----------------------------

  const timerStep = () => {
    setTimer(timer + 1)
  }

  const parserTimer = (num) => {
    let sec = num%60;
    let min = ~~(num/60)%60;
    let hour = ~~(~~(num/60)/60)%60;

    sec < 10 && (sec = '0'+ sec)
    min < 10 && (min = '0'+ min)
    hour < 10 && (hour = '0'+ hour)

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
    const [play] = useSound(clickSound);
    const toDo = () => {
      play();
      setTimerStatus(props.title);
    }

    return (
      <button 
        className={"button" + ` ${props.color}`}
        onClick={toDo}
        style={{display: props.display}}
      >
        <p className="btnTitle">
          {props.children}
        </p>
      </button>
    )
  }

  return (
    <div className="App">
       <main>
          {
            (timerStatus === "Stop") ||
            (timerStatus === "Reset") ?
            <TimerBoxStop/> :
            <TimerBoxRun/>
          }
        <div className="buttonsBox">
          {btnsArr.map(btn => {
            return (
              <Button 
                title={btn.title}
                color={btn.color} 
                key={`btn_${btn.color}`}
                display={btn.display}
              >
                {btn.title}
              </Button>
            )
          })}
        </div>
        <div className="timeListBox">
          {
            timeList.map(item => {
              return <p>{parserTimer(item)}</p>
            })  
          }
        </div>
        <div className="clearBox">
          <button 
            className="clearBtn"
            onClick={() => {
              localStorage.removeItem('timeList')
              setTimeList([])
            }}
          >Clear timer list</button>
        </div>
      </main>
    </div>
  );
}

export default App;
