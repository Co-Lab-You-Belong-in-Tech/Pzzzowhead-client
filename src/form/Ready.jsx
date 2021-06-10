import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../styles/Ready.module.css';


import readyGif from '../assets/pzzzow-animation-1.gif';

const Ready = () => {

  const history = useHistory();

  const navigateToNameNumber = () => {
    setTimeout(() => {
      history.push('/form/sleepsetup')
    }, 400);
  };


  return (
    <>
      <div className={styles.readyContainer}>
        <h2>Ready to sleep Earlier?</h2>
        <img src={readyGif} alt="ready-pic" />
        <p>I'm your personal textbot, <em >pzzzow</em> and will be texting you wind-down and bedtime reminders!</p>
        <p>Let's create your custom sleep schedule.</p>

        <button onClick={navigateToNameNumber}>I'm Ready</button>

      </div>
    </>
  )
}

export default Ready
