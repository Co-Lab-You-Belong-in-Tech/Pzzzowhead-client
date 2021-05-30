import React from 'react'
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types'

const Confirmation = ({ sendSubmission, userName, phoneNumber, wakeUpTime, sleepLength, windDownTime, personality }) => {
  
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
          <p> Your wake up time is {wakeUpTime}</p>
          <p> Your Preferred Sleep length is {sleepLength} hours</p>
          <p> Your Wind Down time is {windDownTime} minutes</p>
          <p> And your sleep bot personality is "{personality}" </p>

          <button onClick={submitAndCongratulate}>Let's Do This!</button>
      </div>
    </>
  )
}

Confirmation.propTypes = {
  sendSubmission: PropTypes.func,
  userName: PropTypes.string,
  phoneNumber: PropTypes.string,
  wakeUpTime: PropTypes.any,
  sleepLength: PropTypes.any,
  windDownTime: PropTypes.any,
  personality: PropTypes.string
}

export default Confirmation
