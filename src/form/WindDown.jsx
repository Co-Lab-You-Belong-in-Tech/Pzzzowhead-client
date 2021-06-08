import React from 'react'
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getWindDownAlarm } from '../utils/getWindDownAlarm';

const WindDown = ({ windDownLength, setWindDownLength, bedTimeAlarm, setWindDownAlarm }) => {

  const history = useHistory();

  const navigateToPzzzownality = () => {
    const newWindDownTime = getWindDownAlarm(bedTimeAlarm, windDownLength);
    console.log(newWindDownTime);
    setWindDownAlarm(newWindDownTime);
    history.push('/form/pzzzownality');
  };

  return (
    <>
      <div className="winddown-card form">
        <h2>Wind it down.</h2>
        <p>Next, let's set some time before bed to wind down</p>
        <p>This is <em>extremely important</em> because many people delay sleep when they don't get enough down time <em>(revenge bedtime procrastination).</em></p>
        <p>How much downtime do you want each night?</p>
        <label>
          Wind Down Time:
          <div className="wind-down-form">
            <label>
              <input
                type="radio"
                name="wind-downs"
                value="1 hour"
                onChange={setWindDownLength}
                className="wind-down-radio"
              />
              1 Hour
              </label>
            <label>
              <input
                defaultChecked
                type="radio"
                name="wind-downs"
                value="1.5 hours"
                onChange={setWindDownLength}
                className="wind-down-radio"
              />
              1.5 Hours
            </label>
            <label>
              <input
                type="radio"
                name="wind-downs"
                value="2 hours"

                onChange={setWindDownLength}
                className="wind-down-radio"
              />
              2 Hours
            </label>
            <label>
              <input
                type="radio"
                name="wind-downs"
                value="3 hours"
                onChange={setWindDownLength}
                className="wind-down-radio"
              />
              Other
            </label>
          </div>
        </label>
      </div>
      <button onClick={navigateToPzzzownality}>Next</button>
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
