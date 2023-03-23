import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addSession, subSession } from './redux/clock-slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'


function SessionControl(){
    const dispatch = useDispatch();
    const {sessionLength} = useSelector((store)=> store.updateLength)

    return(
        <div className='Control'>
            <div id="session-label">Session Length</div>

            <div className='Adjust'>

            <FontAwesomeIcon id="session-increment"icon={faArrowDown} onClick={()=>sessionLength <= 1 ? console.log("Too low") : dispatch(subSession())}/>            
            <p id="session-length">{sessionLength}</p> 
            <FontAwesomeIcon id="session-decrement"icon={faArrowUp} onClick={()=>sessionLength >= 60 ? console.log("Too high") : dispatch(addSession())}/>
                
            </div>
        </div>
    )
}

export default SessionControl;