import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { addBreak, subBreak } from './redux/clock-slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'


function BreakControl() {
    const dispatch = useDispatch();

    const {breakLength} = useSelector((store)=> store.updateLength)
    return (
        <div className='Control'>
            
            <div id="break-label">Break Length</div>
            <div className='Adjust'>
                <FontAwesomeIcon icon={faArrowDown} id="break-decrement" onClick={()=>breakLength <= 1 ? console.log("Too low") :dispatch(subBreak())} />
                <p id="break-length">{breakLength}</p>
                <FontAwesomeIcon icon={faArrowUp} id="break-increment" onClick={()=>breakLength >= 60 ? console.log("Too high") :dispatch(addBreak())} />
            </div>
          
        </div>
    )
}

export default BreakControl;