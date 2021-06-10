import React from 'react'
import { useHistory } from 'react-router-dom';
import celebratePzzzow from '../assets/celebrate_pzzzow.png'

import styles from '../styles/Celebrate.module.css'

const Celebrate = () => {

  const history = useHistory();

  const navigateHome = () => {
    setTimeout(() => {
      history.push('/')
    }, 400);
  };

  
  return (
    <>
      <div className={styles.celebrateContainer}>
        <div>
          <h2>Woohoo! 🎉</h2>
          <h3>You're all set up and I just sent you a text!</h3>
        </div>
        <img src={celebratePzzzow} alt="celebrate-pic" />
        <p>I'm <em>sooooo</em> excited you're joining  me on this 3 week journey to sleep on time and wake up with energy!</p>
        <button onClick={navigateHome}>Great!</button>
      </div>
    </>
  )
}

export default Celebrate
