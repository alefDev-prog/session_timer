import './css/App.css';
import { useState, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addBreak, subBreak, changeBreak } from './redux/clock-slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'


function BreakControl() {
    const dispatch = useDispatch();
    const [sliderPos, setSliderPos] = useState(5);
    const {breakLength, isRunning, isReset} = useSelector((store)=> store.updateLength)

    useEffect(()=> {
        if(isReset) {
            setSliderPos(25);
        }
    }, [isReset])

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


    const changeLength = () => {
        if(isReset) {
            const val = document.querySelector("#breakRange").value;
            dispatch(changeBreak(val));
            setSliderPos(val);
        }
    }


    return (
        <div className='Control'>
            
            <div id="break-label">Break Length</div>
            <div className='Adjust'>
            {isReset ?
                <input type="range" id="breakRange" name="breakRange" value={sliderPos} min="1" max="59"  onChange={changeLength}/>
                : <input type="range" id="breakRange" name="breakRange" value={sliderPos} min="1" max="59" disabled onChange={changeLength}/>}
                <p id="break-length">{breakLength}</p>
            </div>
          
        </div>
    )
}

export default BreakControl;