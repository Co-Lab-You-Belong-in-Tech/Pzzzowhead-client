import React from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types'
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'

import styles from '../styles/NameAndNumber.module.css'

const NameNumber = ({sendSubmission, phoneNumber, setPhoneNumber, userName, setUserName}) => {

  const history = useHistory();

  const navigateToSleepSetup = () => {
    setTimeout(() => {
      sendSubmission();
      history.push('/form/celebrate')
    }, 400);
  };

  return (
    <>
      <div className={`${styles.nameNumberContainer} formContainer`}>
        <div>
          <h2>Those digits ☎️</h2>
          <p>I'll text you reminders for your wind down and bed time. You can text 'STOP' to opt out.</p>
        </div>
        <div className={styles.inputs}>
          <p className={styles.label}>Name</p>
          <input  className={styles.nameInput} type="text" name="" value={userName} onChange={setUserName} placeholder="John Doe"/>
            
          <p className={styles.label}>Phone</p>
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
  sendSubmission: PropTypes.func.isRequired,
  phoneNumber: PropTypes.string,
  setPhoneNumber: PropTypes.func.isRequired,
  userName: PropTypes.string,
  setUserName: PropTypes.func.isRequired
}

export default NameNumber
