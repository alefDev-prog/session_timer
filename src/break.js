import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { addBreak, subBreak } from './redux/clock-slice';


function BreakControl() {
    const dispatch = useDispatch();

    const {breakLength} = useSelector((store)=> store.updateLength)
    return (
        <div className='Control'>
            
            <div id="break-label">Break Length</div>
            <div className='Adjust'>
                <img onClick={()=>breakLength <= 1 ? console.log("Too low") :dispatch(subBreak())} src={require("./pictures/down-arrow.png")} alt="" id="break-decrement" />
                <p id="break-length">{breakLength}</p>
                <img onClick={()=>breakLength >= 60 ? console.log("Too high") :dispatch(addBreak())}src={require("./pictures/up-arrow.png")} alt="" id="break-increment" />
            </div>
          
        </div>
    )
}

export default BreakControl;