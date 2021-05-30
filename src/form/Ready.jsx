import React from 'react';
import { useHistory } from 'react-router-dom';

const Ready = () => {

  const history = useHistory();

  const navigateToNameNumber = () => {
    history.push('/form/nameandnumber')
  };


  return (
    <>
      <div className="ready-card form">
        <h2>Ready to sleep Earlier?</h2>
        <img src="http://www.placekitten.com/300/200" alt="ready-pic" />
        <p>I'm your personal textbot, <em>Pzzzowhead</em> and will be texting you wind-down and bedtime reminders!</p>
        <p>Let's create your custom sleep schedule.</p>

        <button onClick={navigateToNameNumber}>I'm Ready</button>

      </div>
    </>
  )
}

export default Ready
