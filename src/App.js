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

    const title = document.querySelector("#settings-title");
    if(settings)title.style.borderRadius = "2rem";
    else title.style.borderRadius = "2rem 2rem 0 0";

    //spinning gear
    const gear = document.getElementById("gear");
    gear.classList.add("spinning");
    setTimeout(()=> {
      gear.classList.remove("spinning");
    }, 500);
    
  }

  return (
    <div className="App">
      <main id="clock">
      <Timer class="tim"/>
        <div className='container' id="settings-container">
        
            <h2 id="settings-title" onClick={() => showSettings()}>
              <FontAwesomeIcon id="gear" icon={faGear} />
            </h2>
            <div id="settings-wrapper" style={settings ? 
            {height:200, paddingTop: "1.5rem"}: {backgroundColor: "transparent"}}>
              <SessionControl />
              <BreakControl/>
            </div>
        </div>
      </main>
      
    </div>
  );
}

export default App;
