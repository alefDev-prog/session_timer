import './css/App.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addSession, subSession, changeSession } from './redux/clock-slice';


function SessionControl(){
    const dispatch = useDispatch();
    const [sliderPos, setSliderPos] = useState(25);
    const {sessionLength, isRunning, isReset} = useSelector((store)=> store.updateLength)

    useEffect(()=> {
        if(isReset) {
            setSliderPos(25);
        }
    }, [isReset])
    

    const changeLength = () => {
        if(isReset) {
            const val = document.querySelector("#sessionRange").value;
            dispatch(changeSession(val));
            setSliderPos(val);
        }
    }

    return(
        <div className='Control'>
            <div id="session-label">Session Length</div>

            <div className='Adjust'>
                {isReset ?
                <input type="range" id="sessionRange" name="sessionRange" value={sliderPos} min="1" max="59"  onChange={changeLength}/>
                : <input type="range" id="sessionRange" name="sessionRange" value={sliderPos} min="1" max="59" disabled onChange={changeLength}/>}
                
                        
                <p id="session-length">{sessionLength}</p> 
                
                
            </div>
        </div>
    )
}

export default SessionControl;