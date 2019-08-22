import React from 'react';

function Awaybutton(props) {
   return(
    <div className="awayButtons">
      <button className="awayButtons__touchdown"
              onClick={()=> {props.setAwayScore(props.awayScore+7)}}>Away Touchdown</button>
      <button className="awayButtons__fieldGoal"
            onClick={()=> {props.setAwayScore(props.awayScore+3)}}>Away Field Goal</button>
    </div>
   );
}

export default Awaybutton;

