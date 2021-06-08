import React from 'react'
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types'

const Pzzzownality = ({ personality, setPersonality }) => {

  const history = useHistory();

  const navigateToConfirmation = () => {
    history.push('/form/confirmation')
  };

  return (
    <>
      <div className="personality-card form">
      <h2>Pick your pzzzow.</h2>
        <p>Pick the type of pzzzowhead personality you would like to receive texts from.</p>
        <div className="personality-inputs">
        <label>
            Pillow Personality:
            <label>
              <input
                defaultChecked
                type="radio"
                name="pzzzownality"
                value="sassy"
                onChange={setPersonality}
                className="wind-down-radio"
              />
              Sassy
            </label>
            <label>
              <input
                type="radio"
                name="pzzzownality"
                value="cheerleader"
                onChange={setPersonality}
                className="wind-down-radio"
              />
              Cheerleader
            </label>
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
