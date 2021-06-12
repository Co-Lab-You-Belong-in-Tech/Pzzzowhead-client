import React from 'react'
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types'
import styles from  '../styles/Pzzzownality.module.css'
import sassyImg from '../assets/sassy_pzzzow.png'
import cheerleaderImg from '../assets/cheerleader_pzzzow.png'

const Pzzzownality = ({ personality, setPersonality }) => {

  const history = useHistory();

  const navigateToConfirmation = () => {
    setTimeout(() => {
      history.push('/form/nameandnumber')
      
    }, 400);
  };

  return (
    <>
      <div className={`${styles.pzzzownalityContainer} formContainer`}>
        <div>
          <h2>Pick your pzzzow.</h2>
          <p>Pick the type of <em>pzzzow</em> personality you would like to receive texts from.</p>
        </div>
        <div className={styles.pzzzowInputs}>
          <input
            id="pzzzow-1"
            defaultChecked
            type="radio"
            name="pzzzownality"
            value="sassy"
            onChange={setPersonality}
            className={styles.radio}
          />
          <label htmlFor="pzzzow-1">
            <img src={sassyImg} htmlFor="pzzzow-1"/>
          Sassy
          </label>
          <input
            id="pzzzow-2"
            type="radio"
            name="pzzzownality"
            value="cheerleader"
            onChange={setPersonality}
            className={styles.radio}
          />
          <label htmlFor="pzzzow-2">
            <img src={cheerleaderImg} htmlFor="pzzzow-1"/>
          Cheerleader
          </label>
        </div>
        <button onClick={navigateToConfirmation}>Next</button>
      </div>
    </>
  )
}

Pzzzownality.propTypes = {
  personality: PropTypes.string,
  setPersonality: PropTypes.func.isRequired
}

export default Pzzzownality
