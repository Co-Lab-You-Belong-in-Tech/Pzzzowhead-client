import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import { getBedTimeAlarm } from '../utils/getBedTimeAlarm';
import { getTimeZone } from '../utils/getTimeZone';

import styles from '../styles/SleepSetup.module.css'


const SleepSetup = ({ sleepLength, setSleepLength, setWakeUpTime, timeInput, setTimeInput, setWeekday, setBedTimeAlarm }) => {

  const history = useHistory();

  const navigateToWindDown = () => {
    const newBedTime = getBedTimeAlarm(timeInput, sleepLength);
    console.log(newBedTime);
    setBedTimeAlarm(newBedTime);
    history.push('/form/winddown');
  };

  useEffect(() => {
    // combines client's timezone with their timeInput
    const time = `${timeInput}${getTimeZone()}`;
    setWakeUpTime(time);
  }, [timeInput])

  return (
    <>
    <div className={styles.sleepSetupContainer}>
      <div>
        <h2>Time Flies ⏰...</h2>
        <p>Let's configure your bedtime next!</p>
      </div>
      <div className="sleep-setup-inputs">
        <p className={styles.label}> Ideal Wake up time</p>
          <input name="wake-up-time" type="time"  value={timeInput} onChange={setTimeInput} />

        <p className={styles.label}>When so you want sleep notifications?</p>
        <div className={styles.weekday}> 
            <input 
            id="radio-1"
            type="radio" 
            name="weekday" 
            defaultChecked
            value="weekdays only" 
            onChange={setWeekday}
            className={styles.radio} />
          <label htmlFor="radio-1">
            weekdays only
          </label>
            <input 
            id="radio-2"
            type="radio" 
            name="weekday" 
            value="all days" 
            onChange={setWeekday}
            className={styles.radio} />
            <label htmlFor="radio-2">
            all days
          </label>
          </div> 
          <p className={styles.label}>Sleep Goal (# of hours)</p>
          <div className={styles.hours} >
            <input 
              id="sleep-7"
              type="radio" 
              name="sleep"
              value="7 hours" 
              onChange={setSleepLength}
              className={styles.radio} />
            <label htmlFor="sleep-7" className={styles.hourLabel}>
              7 hrs
            </label>
            <input 
              id="sleep-8"
              type="radio" 
              name="sleep"
              defaultChecked
              value="8 hours" 
              onChange={setSleepLength}
              className={styles.radio} />
            <label htmlFor="sleep-8" className={styles.hourLabel}>
              8 hrs
            </label>
            <input 
              id="sleep-9"
              type="radio" 
              name="sleep"
              value="9 hours" 
              onChange={setSleepLength}
              className={styles.radio} />
            <label htmlFor="sleep-9" className={styles.hourLabel}>
              9 hrs
            </label>
            <input 
              id="sleep-other"
              type="radio" 
              name="sleep"
              value="10 hours" 
              onChange={setSleepLength}
              className={styles.radio} />
            <label htmlFor="sleep-other" className={styles.hourLabel}>
              other
            </label>
          </div>
      </div>
      <button onClick={navigateToWindDown}>Next</button>
    </div>
  </>
  )
}

SleepSetup.propTypes = {
  sleepLength: PropTypes.string,
  timeInput: PropTypes.string,
  setSleepLength: PropTypes.func.isRequired,
  setWakeUpTime: PropTypes.func.isRequired,
  setTimeInput: PropTypes.func.isRequired,
  setWeekday: PropTypes.func.isRequired,
  setBedTimeAlarm: PropTypes.func.isRequired
}

export default SleepSetup
