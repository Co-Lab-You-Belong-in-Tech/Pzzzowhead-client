import React from 'react'
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getWindDownAlarm } from '../utils/getWindDownAlarm';

import styles from '../styles/WindDown.module.css'

const WindDown = ({ windDownLength, setWindDownLength, bedTimeAlarm, setWindDownAlarm }) => {

  const history = useHistory();

  const navigateToPzzzownality = () => {
    const newWindDownTime = getWindDownAlarm(bedTimeAlarm, windDownLength);
    console.log(newWindDownTime);
    setWindDownAlarm(newWindDownTime);
    setTimeout(() => {
      history.push('/form/pzzzownality');
    }, 400);
  };

  return (
    <>
      <div className={`${styles.windDownContainer} formContainer`}>
        <div>
          <h2>Wind it down. 😪</h2>
          <p>Next, let's set some time before bed to wind down</p>
          <p>This is <em>extremely important</em> because many people delay sleep when they don't get enough down time <em>(revenge bedtime procrastination).</em></p>
        </div>
        <div>
          <p className={styles.label}>How much downtime do you want each night?</p>
            <div className={styles.windDown}>
                <input
                  id="wind-1"
                  type="radio"
                  name="wind-downs"
                  value="1 hour"
                  onChange={setWindDownLength}
                  className={styles.radio}
                  />
                <label htmlFor="wind-1">
                1 hr
                </label>
              
                <input
                id="wind-1.5"
                  defaultChecked
                  type="radio"
                  name="wind-downs"
                  value="1.5 hours"
                  onChange={setWindDownLength}
                  className={styles.radio}
                />
                <label htmlFor="wind-1.5">
                1.5 hrs
              </label>
              
                <input
                id="wind-2"
                  type="radio"
                  name="wind-downs"
                  value="2 hours"
                  onChange={setWindDownLength}
                  className={styles.radio}
                />
                <label htmlFor="wind-2">
                2 hrs
              </label>
              
                <input
                id="wind-3"
                  type="radio"
                  name="wind-downs"
                  value="3 hours"
                  onChange={setWindDownLength}
                  className={styles.radio}
                />
                <label htmlFor="wind-3">
                other
              </label>
            </div>
        </div>
      <button onClick={navigateToPzzzownality}>Next</button>
      </div>
    </>
  )
}

WindDown.propTypes = {
  windDownLength: PropTypes.string,
  setWindDownLength: PropTypes.func.isRequired,
  bedTimeAlarm: PropTypes.string,
  setWindDownAlarm: PropTypes.func.isRequired
}

export default WindDown
