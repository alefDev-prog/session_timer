import './css/App.css';
import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetAll, toggleRun, started } from './redux/clock-slice';

function Timer() {
    const dispatch = useDispatch();
    const {sessionLength, breakLength, isReset} = useSelector((store) => store.updateLength);
    const [time, setTime] = useState(sessionLength*60);
    const [running, setRunning] = useState(false);
    const [inBreak, setBreak] = useState(false);
    const timerId = useRef();
    const timerColor = useRef("white");

    

    useEffect(() => {
        setTime(()=> sessionLength*60)
        timerColor.current="white";
    }, [sessionLength]);

    useEffect(() => {
        if (time === -1 && inBreak === false) {
            setTime(()=> breakLength*60);
            setBreak(()=> true);
            playAudio();

        }
        else if (time === -1 && inBreak === true) {
            setTime(()=> sessionLength*60);
            setBreak(()=> false);
            playAudio();
        }

        if (time < 30) timerColor.current="red";
        else timerColor.current="white";
        
    }, [time, breakLength, inBreak, sessionLength]);

    const playAudio = () => {
        let aud = document.getElementById("beep");
        aud.play();
    }

    const StartbtnStyling = (color) =>{
     
        if(color === "green") {
            return {
                boxShadow: "0 0 0 5px rgba(0,255,0,0.25)",
                backgroundColor: "rgba(0,255,0,0.25)",
                color: "rgb(0,255,0)"
            };
        }
        else return {
                boxShadow: "0 0 0 5px rgba(255, 0, 0, 0.3)",
                backgroundColor: "rgba(255, 0, 0, 0.3)",
                color: "rgb(255,50,50)"
        }
    }

    const ResetbtnStyling = () => {
        if(isReset) return {
          boxShadow: "0 0 0 5px rgba(138, 73, 0, 0.3)",
          backgroundColor: "rgba(138, 73, 0, 0.3)",
          color: "rgba(219, 168, 108,0.6)"
        }

        else return {
          boxShadow: "0 0 0 5px rgba(138, 73, 0, 0.75)",
          backgroundColor: "rgba(138, 73, 0, 0.75)",
          color: "rgb(219, 168, 108)"
        }
    }
    
    
 
    const start = () => {
        dispatch(toggleRun());
        dispatch(started());
        timerId.current = setInterval(()=> {
            setTime(prev => prev -1);
        }, 100);
        setRunning(()=>true); 
    }

    const stop = () => {
        dispatch(toggleRun())
        clearInterval(timerId.current);
        timerId.current = 0;
        setRunning(()=>false);
        let aud = document.getElementById("beep");
        aud.pause();
        aud.currentTime=0;

    }

    const reset = () => {
        stop();
        dispatch(toggleRun())
        dispatch(resetAll());
        setTime(()=>sessionLength*60);
        setBreak(()=>false);
        let aud = document.getElementById("beep");
        aud.pause();
        aud.currentTime = 0;
    }


    let minutes = Math.floor(time / 60).toString();
    let seconds = (time % 60).toString();
    const zero = '0';
    if(minutes.length === 1) minutes = zero.concat(minutes);
    if(seconds.length === 1) seconds = zero.concat(seconds);

    
    

    return(
        
    
        <main id="timer-wrapper">
            
            
            <audio id="beep" src={require("./audio/beep-clock.mp3")}></audio>

            {inBreak ? <p id="timer-label">Break</p> : <p id="timer-label">Session</p>}

            <div id="time-left"  style={{color:timerColor.current}}>{minutes}:{seconds}</div>

            <section id="timer-btn-wrapper">
                {running ?
                <div className="timerBtn" id="start_stop" style={StartbtnStyling("red")} onClick={running ? stop : start}>stop</div>
                :
                <div className="timerBtn" id="start_stop" style={StartbtnStyling("green")} onClick={running ? stop : start}>start</div>}

                <div className="timerBtn" id="reset" onClick={reset} style={ResetbtnStyling()}>reset</div>
            </section>

            

        </main>
    )
}

export default Timer;