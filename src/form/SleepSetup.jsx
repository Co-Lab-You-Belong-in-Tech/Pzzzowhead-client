import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';


const SleepSetup = ({ sleepLength, setSleepLength, setWakeUpTime, timeInput, setTimeInput, setWeekday }) => {

  const history = useHistory();

  const navigateToWindDown = () => {
    history.push('/form/winddown');
  };

  useEffect(() => {
    // combines client's timezone with their timeInput
    const d = new Date();
    const timeZone = d.toString().split(" ")[5].split("").slice(3).join("");
    const time = `${timeInput}${timeZone}`;
    setWakeUpTime(time);
  }, [timeInput])

  return (
    <>
    <div className="sleep-setup-card form">
    <h2>Time Flies...</h2>
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
  sleepLength: PropTypes.number,
  timeInput: PropTypes.string,
  setSleepLength: PropTypes.func.isRequired,
  setWakeUpTime: PropTypes.func.isRequired,
  setTimeInput: PropTypes.func.isRequired,
  setWeekday: PropTypes.func.isRequired
}

export default SleepSetup
