import './App.css';
import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetAll } from './redux/clock-slice';

function Timer() {
    const dispatch = useDispatch();
    const {sessionLength, breakLength} = useSelector((store) => store.updateLength);
    const [time, setTime] = useState(sessionLength*60);
    const [running, setRunning] = useState(false);
    const [inBreak, setBreak] = useState(false);
    const timerId = useRef();

    useEffect(() => {
        setTime(()=> sessionLength*60)
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
    }, [time, breakLength, inBreak, sessionLength]);

    const playAudio = () => {
        let aud = document.getElementById("beep");
        aud.play();
    }

    
    
 
    const start = () => {
        timerId.current = setInterval(()=> {
            setTime(prev => prev -1);
        }, 1000);
        setRunning(()=>true); 
    }

    const stop = () => {
        clearInterval(timerId.current);
        timerId.current = 0;
        setRunning(()=>false);
    }

    const reset = () => {
        stop();
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
            
            {inBreak ? <p id="timer-label">Break</p> : <p id="timer-label">Session</p>}
            <audio id="beep" src="/audio/beep-clock.mp3"></audio>
            <div id="time-left">{minutes}:{seconds}</div>
            {running ? <button id="start_stop" onClick={running ? stop : start}>stop</button> : <button id="start_stop" onClick={running ? stop : start}>start</button>}
            <button id="reset" onClick={reset}>reset</button>

        </main>
    )
}

export default Timer;