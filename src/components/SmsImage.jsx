import React, { useEffect } from 'react';
import styles from '../styles/SmsImage.module.css'
import Aos from 'aos';
require('aos/dist/aos.css');

// IMAGES 
import phoneScreen from '../assets/iPhone_Mockup/Group\ 77.png';
import RectangleOne from '../assets/iPhone_Mockup/Rectangle_1.png';
import RectangleTwo from '../assets/iPhone_Mockup/Rectangle_2.png';
import textOne from '../assets/iPhone_Mockup/text_one.png';
import textTwo from '../assets/iPhone_Mockup/text_two.png';
import clockEmoji from '../assets/iPhone_Mockup/clock_emoji.png';
import strongEmoji from '../assets/iPhone_Mockup/strong_emoji.png';
import faceOne from '../assets/iPhone_Mockup/face_1.png';
import faceTwo from '../assets/iPhone_Mockup/face_2.png';


const SmsImage = () => {
  useEffect(() => {
    Aos.init({duration: 500, 
      delay: 800,
      anchorPlacement: 'bottom-top' 
    });
  }, [])
  return (
    <div data-aos="fade-up" className={styles.smsImageContainer}>
      <div data-aos="fade-left"
        data-aos-delay="1000" className={`${styles.smsContainer} ${styles.textOne}`}>
        <img src={RectangleTwo} alt="text bubble One" className={styles.textBubble} />
        <img src={textTwo} alt="text content One" className={styles.textContent} />
        <img src={clockEmoji} alt="clock-emoji" className={styles.clockEmoji} />
        <div className={styles.faceOne}>
          <img data-aos="zoom-in" 
           data-aos-easing="ease-out-back"
           data-aos-delay="2000"
            src={faceOne} alt="smiley face" />
        </div>
      </div>
      <div data-aos="fade-right" 
        data-aos-delay="1000"className={`${styles.smsContainer} ${styles.textTwo}`}>
        <img src={RectangleOne} alt="text bubble Two" className={styles.textBubble} />
        <img src={textOne} alt="text content Two" className={styles.textContent} />
        <img src={strongEmoji} alt="clock-emoji" className={styles.strongEmoji} />
        <div className={styles.faceTwo}>
          <img 
            data-aos="zoom-in" 
            data-aos-easing="ease-out-back"
            data-aos-delay="2100"
            src={faceTwo} alt="smiley face" />
        </div>
      </div>
      <div className={`${styles.faceContainer} ${styles.faceOne}`}>
        <img src="" alt="cute face one" className={styles.faceImage} />
      </div>
      <div className={`${styles.faceContainer} ${styles.faceTwo}`}>
        <img src="" alt="cute face two" className={styles.faceImage} />
      </div>
      <img className={styles.phoneScreen} src={phoneScreen} alt="phone screen"  />
    </div>
  )
}

export default SmsImage;
