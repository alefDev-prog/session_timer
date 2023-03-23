import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addSession, subSession } from './redux/clock-slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'


function SessionControl(){
    const dispatch = useDispatch();
    const {sessionLength, isRunning} = useSelector((store)=> store.updateLength)

    const subLength = () => {
        console.log(isRunning);
        if (!isRunning) {
            dispatch(subSession())
        }
    }

    const addLength = () => {
        if(!isRunning) {
            dispatch(addSession());
        }
    }

    return(
        <div className='Control'>
            <div id="session-label">Session Length</div>

            <div className='Adjust'>

            <FontAwesomeIcon id="session-increment"icon={faArrowDown} onClick={()=>sessionLength <= 1 ? console.log("Too low") : subLength()}/>            
            <p id="session-length">{sessionLength}</p> 
            <FontAwesomeIcon id="session-decrement"icon={faArrowUp} onClick={()=>sessionLength >= 60 ? console.log("Too high") : addLength()}/>
                
            </div>
        </div>
    )
}

export default SessionControl;