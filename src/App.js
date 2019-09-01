//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import Scoreboard from './components/Scoreboard';
import Homebutton from './components/Homebutton';
import Awaybutton from './components/Awaybutton';


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0)

  return (
    <div className="container">
      <Scoreboard homeScore={homeScore} awayScore={awayScore}/>
      <section className="buttons">
        <Homebutton 
           homeScore={homeScore}           
           setHomeScore={setHomeScore}  
           />
        <Awaybutton 
           awayScore={awayScore}
           setAwayScore={setAwayScore}          
        />       
      </section>
    </div>
  );
}

export default App;
