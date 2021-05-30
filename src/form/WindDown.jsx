import React from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

const WindDown = ({ windDownTime, setWindDownTime }) => {

  const history = useHistory();

  const navigateToConfirmation = () => {
    console.log(windDownTime);
    history.push('/form/pzzzownality');
  };
// Focus on showing state ic Confirmation afer break
  return (
    <>
      <div className="winddown-card form">
        <h2>Wind it down.</h2>
        <p>Next, let's set some time before bed to wind down</p>
        <p>This is expremely important because many people delay sleep when they don't get enough down time (revenge bedtime procrastination)</p>
        <p>How much downtime do you want each night?</p>
        <label>
          Wind Down Time:
          <div className="wind-down-form">
          
              <input
                type="radio"
                name="wind-downs"
                value="1"
                checked={windDownTime === "1"}
                onChange={e => setWindDownTime(e.currentTarget.value)}
                className="wind-down-radio"
              />
              1 Hour
            
            <label>
              <input
                type="radio"
                name="wind-downs"
                value="1.5"
                checked={windDownTime === "1.5"}
                onChange={e => setWindDownTime(e.currentTarget.value)}
                className="wind-down-radio"
              />
              1.5 Hours
            </label>
            <label>
              <input
                type="radio"
                name="wind-downs"
                value="2"
                checked={windDownTime === "2"}
                onChange={e => setWindDownTime(e.currentTarget.value)}
                className="wind-down-radio"
              />
              2 Hours
            </label>
            <label>
              <input
                type="radio"
                name="wind-downs"
                value="other"
                checked={windDownTime === "3"}
                onChange={e => setWindDownTime(e.currentTarget.value)}
                className="wind-down-radio"
              />
              Other
            </label>
          </div>
        </label>
      </div>
      <button onClick={navigateToConfirmation}>Next</button>
    </>
  )
}

WindDown.propTypes = {
  windDownTime: PropTypes.string,
  setWindDownTime: PropTypes.func.isRequired
}

export default WindDown
