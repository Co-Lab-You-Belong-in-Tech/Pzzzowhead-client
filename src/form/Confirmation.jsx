import React from 'react'
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { convertToStanardTime } from '../utils/convertToStandardTime'

const Confirmation = ({ sendSubmission, userName, phoneNumber, timeInput, sleepLength, windDownLength, personality, weekday, windDownAlarm, bedTimeAlarm }) => {
  
  // need bedTimeAlarm, and parsed version
  // need windDownAlarm, and parsed version
  // need wakeUpAlarm, and parsed version => parsed timeInput
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
          <p> Your Wind Down amount is {windDownLength} </p>
          <p> And that means your wind down time is {windDownAlarm}</p>
          <p> Your weekly preference is {weekday}</p>
          <p> And your sleep bot personality is "{personality}" </p>

          <button onClick={submitAndCongratulate}>Let's Do This!</button>
      </div>
    </>
  )
}

Confirmation.propTypes = {
  sendSubmission: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  timeInput: PropTypes.string.isRequired,
  sleepLength: PropTypes.any.isRequired,
  windDownLength: PropTypes.any.isRequired,
  windDownAlarm: PropTypes.string.isRequired,
  bedTimeAlarm: PropTypes.string.isRequired,
  personality: PropTypes.string.isRequired,
  weekday: PropTypes.string.isRequired
}

export default Confirmation
