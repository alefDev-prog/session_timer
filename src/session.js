import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addSession, subSession } from './redux/clock-slice';


function SessionControl(){
    const dispatch = useDispatch();
    const {sessionLength} = useSelector((store)=> store.updateLength)

    return(
        <div className='Control'>
            <div id="session-label">Session Length</div>

            <div className='Adjust'>
                <img onClick={()=>sessionLength <= 1 ? console.log("Too low") : dispatch(subSession())}src={require("./pictures/down-arrow.png")} alt="" id="session-decrement"></img>
                <p id="session-length">{sessionLength}</p>
                <img onClick={()=>sessionLength >= 60 ? console.log("Too high") : dispatch(addSession())} src={require("./pictures/up-arrow.png")} alt="" id="session-increment" />
            </div>
        </div>
    )
}

export default SessionControl;