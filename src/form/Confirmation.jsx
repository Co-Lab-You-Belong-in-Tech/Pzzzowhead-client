import React from 'react'
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types'

const Confirmation = ({ sendSubmission, userName, phoneNumber, timeInput, sleepLength, windDownLength, personality, weekday }) => {
  
  // need bedTimeAlarm, and parsed version
  // need windDownAlarm, and parsed version
  // need wakeUpAlarm, and parsed version
  //add weekday
  const history = useHistory();

  const submitAndCongratulate = () => {
    sendSubmission();
    history.push('/form/celebrate')
  };
  
  return (
    <>
      <div className="confirmation-card form">
        <h2>Let's Confirm your details</h2>
        <p> Your name is {userName}</p>
          <p> Your phone number is {phoneNumber}</p>
          <p> Your wake up time is {timeInput}</p>
          <p> Your Preferred Sleep length is {sleepLength} </p>
          <p> And that means your bedtime is {bedTimeAlarm}</p>
          <p> Your Wind Down time is {windDownLength} hours</p>
          <p> five days a week</p>
          <p> And your sleep bot personality is "{personality}" </p>

          <button onClick={submitAndCongratulate}>Let's Do This!</button>
      </div>
    </>
  )
}

Confirmation.propTypes = {
  sendSubmission: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  timeInput: PropTypes.string.isRequired,
  sleepLength: PropTypes.any.isRequired,
  windDownLength: PropTypes.any.isRequired,
  personality: PropTypes.string.isRequired,
  weekday: PropTypes.string.isRequired
}

export default Confirmation
