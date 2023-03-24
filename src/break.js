import './css/App.css';
import { useSelector,useDispatch } from 'react-redux';
import { addBreak, subBreak } from './redux/clock-slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'


function BreakControl() {
    const dispatch = useDispatch();
    const {breakLength, isRunning, isReset} = useSelector((store)=> store.updateLength)


    const subLength = () => {
        console.log(isRunning);
        if (isReset) {
            dispatch(subBreak())
        }
    }

    const addLength = () => {
        if(isReset) {
            dispatch(addBreak());
        }
    }


    return (
        <div className='Control'>
            
            <div id="break-label">Break Length</div>
            <div className='Adjust'>
                <FontAwesomeIcon icon={faArrowDown} id="break-decrement" onClick={()=>breakLength <= 1 ? console.log("Too low") :subLength()} />
                <p id="break-length">{breakLength}</p>
                <FontAwesomeIcon icon={faArrowUp} id="break-increment" onClick={()=>breakLength >= 60 ? console.log("Too high") :addLength()} />
            </div>
          
        </div>
    )
}

export default BreakControl;