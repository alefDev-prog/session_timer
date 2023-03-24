import './css/App.css';
import BreakControl from './break';
import SessionControl from './session';
import Timer from './timer';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons'


function App() {

  const [settings, toggleSettings] = useState(false);

  const showSettings = () => {
    toggleSettings(!settings);
    console.log(settings);
  }

  return (
    <div className="App">
      <main id="clock">
      <Timer class="tim"/>
        <div className='container'>
        
            <h2 id="settings-title" onClick={() => showSettings()}>Settings   <FontAwesomeIcon icon={faGear} /></h2>
            <div id="settings-wrapper" style={settings ? {height:100}: {}}>
              <SessionControl />
              <BreakControl/>
            </div>
        </div>
      </main>
      
    </div>
  );
}

export default App;
