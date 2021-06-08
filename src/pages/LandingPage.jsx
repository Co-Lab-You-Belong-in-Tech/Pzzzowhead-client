import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import styles from '../styles/LandingPage.module.css';
import landingImage from '../assets/pzzzow-landing-page-image.png';
import pickAPzzzow from '../assets/Pick_A_Pzzzow_Icon.png';
import windDown from '../assets/Wind_Down_Icon.png';
import sleepCalendar from '../assets/Sleep_Calendar_Icon.png';

import SmsImage from '../components/SmsImage';
import Aos from 'aos';
require('aos/dist/aos.css');



const LandingPage = () => {
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  const history = useHistory();

  const navigateToForm = () => {
    setTimeout(() => {
      history.push('/form/ready')
    }, 400);
  };

  return (
    <div className={styles.landingPage}>
      <section className={styles.titleContainer}>
        <img className={styles.landingImage} src={landingImage} alt="pzzzow head landing page image" />
        <h2
          className={styles.mainTitle}>pzzzow talk</h2>
      </section>
      <div className={styles.introContainer}>
        <h1 data-aos="fade" 
          data-aos-duration="300"> I'm Pizzow - your personal sleep text bot. </h1>
        <p data-aos="fade-up" 
          data-aos-duration="800"
          data-aos-delay="5"> I'm <strong>NOT</strong> a boring sleep alarm- cause you snooze that <strong>s***</strong> and watch Youtube. With me, you watch Youtube guilt free. And get 8 hours of sleep.</p>
        <button data-aos="fade-right" 
          data-aos-delay="900"
          data-aos-duration="2400"
          className={styles.tryItNowButton} onClick={navigateToForm}>Try it now!</button>
      </div>
      <section className={styles.explainContainer}>
        <SmsImage />
        <h1>I fight Revenge Bedtime Procrastination</h1>
        <p>You want to sleep earlier. It’s 12am, you say “just one video” and then <strong>BOOM! It’s 3AM?!</strong></p>

        <p>That’s called <strong>Revenge Bedtime Procrastination</strong> and it happens because you haven’t set a wind down and sleep schedule that works. <strong>I’m here to help you fight it!</strong></p>
      </section>
      <section 
         className={styles.infoContainer}>
        <div data-aos="fade-up"
          className="info-card">
          <img src={pickAPzzzow} alt="pick a pzzzow"      className="card-image" />
          <h2>Pick your Pzzzow</h2>
          <p>You need soft encouragement? Tough love? Pick the pzzzow that works for you</p>
        </div>
        <div 
          className="info-card">
          <img data-aos="fade-up" src={windDown} alt="pzzzow clock" className="card-image" />
            <h2 data-aos="fade-up">Guilt - Free Downtime</h2>
            <p data-aos="fade-up">Always sacrificing your downtime or your sleep? Not with Pzzzow.</p>
        </div>
        <div className="info-card">
          <img data-aos="fade-up" src={sleepCalendar} alt="pzzzow calendar " className="card-image" />
            <h2 data-aos="fade-right"
              data-aos-delay="800">Custom Sleep Schedule</h2>
            <p data-aos="fade-up" 
              data-aos-delay="800">Pzzzow will help you create a wind down and sleep schedule that works for you.</p>
        </div>
        <button 
          data-aos="fade-left" 
          data-aos-duration="2000"
          data-aos-easing="ease-in-out-sine"
          className={styles.tryItNowButtonBottom} onClick={navigateToForm}>Try it now!</button>
      </section>
      <footer style={{ display: 'none'}}>This is the footer for Pzzzowhead</footer>

    </div>
    
  )
}

export default LandingPage
