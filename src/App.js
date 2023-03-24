import './css/App.css';
import BreakControl from './break';
import SessionControl from './session';
import Timer from './timer';

function App() {
  return (
    <div className="App">
      <main id="clock">
      <Timer class="tim"/>
        <div className='container'>
          <SessionControl />
          <BreakControl/>
        </div>
      </main>
      
    </div>
  );
}

export default App;
