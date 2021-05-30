import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types'

const SleepSetup = ({ sleepLength, wakeUpTime, setSleepLength, setWakeUpTime }) => {

  const history = useHistory();

  const navigateToWindDown = () => {
    history.push('/form/winddown');
  };

  return (
    <>
    <div className="sleep-setup-card form">
    <h2>Time Flies...</h2>
      <p>Let's figure out when you should sleep!</p>
      <div className="sleep-setup-inputs">
        <label>
          Ideal Wake up time
          <input  type="text" name="" value={wakeUpTime} onChange={setWakeUpTime} placeholder="8:30AM"/>
        </label>
        <label>
          Days of the Week
          <div className="weekDays-selector">
          <input type="checkbox" id="weekday-sun" className="weekday" />
          <label htmlFor="weekday-sun">Sunday</label>
          <input type="checkbox" id="weekday-mon" className="weekday" />
          <label htmlFor="weekday-mon">Monday</label>
          <input type="checkbox" id="weekday-tue" className="weekday" />
          <label htmlFor="weekday-tue">Tuesday</label>
          <input type="checkbox" id="weekday-wed" className="weekday" />
          <label htmlFor="weekday-wed">Wednesday</label>
          <input type="checkbox" id="weekday-thu" className="weekday" />
          <label htmlFor="weekday-thu">Thursday</label>
          <input type="checkbox" id="weekday-fri" className="weekday" />
          <label htmlFor="weekday-fri">Friday</label>
          <input type="checkbox" id="weekday-sat" className="weekday" />
          <label htmlFor="weekday-sat">Saturday</label>
        </div>
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
  wakeUpTime: PropTypes.string,
  setSleepLength: PropTypes.func.isRequired,
  setWakeUpTime: PropTypes.func.isRequired
}

export default SleepSetup
