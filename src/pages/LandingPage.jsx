import React from 'react';
import { useHistory } from 'react-router-dom';

import styles from '../styles/LandingPage.css';
import landingImage from '../assets/pzzzow-landing-page-image.png';
import pickAPzzzow from '../assets/Pick_A_Pzzzow_Icon.png';
import windDown from '../assets/Wind_Down_Icon.png';
import sleepCalendar from '../assets/Sleep_Calendar_Icon.png';

// SMS images
import phoneScreen from '../assets/iPhone_Mockup/Group\ 77.png';

const LandingPage = () => {
  const history = useHistory();

  const navigateToForm = () => {
    history.push('/form/ready')
  };

  return (
    <div className={styles.landingPage}>
      <section className={styles.titleContainer}>
        <img className={styles.landingImage} src={landingImage} alt="pzzzow head landing page image" />
        <h2 className={styles.mainTitle}>pzzzow talk</h2>
      </section>
      <div className={styles.introContainer}>
        <h1> I'm Pizzow - your personal sleep text bot. </h1>
        <p> I'm <strong>NOT</strong> a boring sleep alarm- cause you snooze that <strong>s***</strong> and watch Youtube. With me, you watch Youtube guilt free. And get 8 hours of sleep.</p>
        <button className={styles.tryItNowButton} onClick={navigateToForm}>Try it now!</button>
        </div>
    
      <section className={styles.infoContainer}>
        <div className="info-card">
          <img src={pickAPzzzow} alt="pick a pzzzow" className="card-image" />
          <h2>Pick your Pzzzow</h2>
          <p>You need soft encouragement? Tough love? Pick the pzzzow that works for you</p>
        </div>
        <div className="info-card">
          <img src={windDown} alt="pzzzow clock" className="card-image" />
            <h2>Guilt - Free Downtime</h2>
            <p>Always sacrificing your downtime or your sleep? Not with Pzzzow.</p>
        </div>
        <div className="info-card">
          <img src={sleepCalendar} alt="pzzzow calendar " className="card-image" />
            <h2>Custom Sleep Schedule</h2>
            <p>Pzzzow will help you create a wind down and sleep schedule that works for you.</p>
        </div>
      </section>
      <section className={styles.explainContainer}>
          <div className={styles.smsImageContainer}>
            <img className={styles.phoneScreen} src={phoneScreen} alt="phone screen"  />
          </div>
          <h1>I fight Revenge Bedtime Procrastination</h1>
          <p>You want to sleep earlier. It’s 12am, you say “just one video” and then <strong>BOOM! It’s 3AM?!</strong></p>

          <p>That’s called <strong>Revenge Bedtime Procrastination</strong> and it happens because you haven’t set a wind down and sleep schedule that works. <strong>I’m here to help you fight it!</strong></p>
          <button className={styles.tryItNowButtonBottom} onClick={navigateToForm}>Try it now!</button>
      </section>
      <footer>This is the footer for Pzzzowhead</footer>

    </div>
    
  )
}

export default LandingPage
