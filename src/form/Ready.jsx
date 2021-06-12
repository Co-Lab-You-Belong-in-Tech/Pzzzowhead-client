import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Aos from 'aos';
import styles from '../styles/Ready.module.css';


import readyGif from '../assets/pzzzow-animation-1.gif';


const Ready = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const history = useHistory();

  const navigateToNameNumber = () => {
    setTimeout(() => {
      history.push('/form/sleepsetup')
    }, 400);
  };


  return (
    <>
      <div className={`${styles.readyContainer} formContainer`}>
        <h2 data-aos="fade-in"> Ready to sleep Earlier?</h2>
        <img data-aos="fade-in" data-aos-duration="1000" src={readyGif} alt="ready-pic" />
        <p data-aos="fade-in" >I'm your personal textbot, <em >pzzzow</em> and will be texting you wind-down and bedtime reminders!</p>
        <p>Let's create your custom sleep schedule.</p>

        <button className="bouncy" onClick={navigateToNameNumber}>I'm Ready</button>

      </div>
    </>
  )
}

export default Ready
