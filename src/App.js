import './App.css';
import BreakControl from './break';
import SessionControl from './session';
import Timer from './timer';

function App() {
  return (
    <div className="App">
      <main id="clock">
        <div className='container'>
          <SessionControl />
          <BreakControl/>
        </div>
        <Timer class="tim"/>
      </main>
      
    </div>
  );
}

export default App;
