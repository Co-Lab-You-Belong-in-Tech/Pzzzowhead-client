import React from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types'
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'

const NameNumber = ({phoneNumber, setPhoneNumber, userName, setUserName}) => {

  const history = useHistory();

  const navigateToSleepSetup = () => {
    history.push('/form/sleepsetup')
  };

  return (
    <>
      <div className="name-number-card form">
      <h2>Those digits.</h2>
        <p>I'll text you reminders for your wind down and bed time. You can text 'STOP' to opt out.</p>
        <p>Let's create your custom sleep schedule.</p>
        <div className="name-number-inputs">
          <label>
              Name:
                <input  type="text" name="" value={userName} onChange={setUserName} placeholder="Your Name"/>
            </label>
              
              <PhoneInput
                international
                defaultCountry="CA"
                value={phoneNumber}
                onChange={setPhoneNumber}
                />
        </div>
        <button onClick={navigateToSleepSetup}>Next</button>
      </div>
    </>
  )
}

NameNumber.propTypes = {
  phoneNumber: PropTypes.string,
  setPhoneNumber: PropTypes.func.isRequired,
  userName: PropTypes.string,
  setUserName: PropTypes.func.isRequired
}

export default NameNumber
