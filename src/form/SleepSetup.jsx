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
    <h2>Time Flies ⏰...</h2>
      <p>Let's configure your bedtime next!</p>
      <div className="sleep-setup-inputs">
        <label htmlFor="wake-up-time">Ideal Wake up time</label>
          <input name="wake-up-time" type="time"  value={timeInput} onChange={setTimeInput} />
        <label>When so you want sleep notifications?</label>
          <label>
            <input 
            type="radio" 
            name="weekday" 
            defaultChecked
            value="weekdays only" 
            onChange={setWeekday}
            className="weekday-radio" />
            weekdays only
          </label>
          <label>
            <input 
            type="radio" 
            name="weekday" 
            value="all days" 
            onChange={setWeekday}
            className="weekday-radio" />
            all days
          </label>
        
          <label>
            Sleep Goal (# of hours)
            <select value={sleepLength} onChange={setSleepLength}>
              <option value="6">6 hours</option>
              <option value="7">7 hours</option>
              <option default value="8">8 hours</option>
              <option value="9">9 hours</option>
              <option value="10">10 hours</option>
            </select>
          </label>
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
