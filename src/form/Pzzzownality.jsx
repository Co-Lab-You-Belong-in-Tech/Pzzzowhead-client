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
            <select value={personality} onChange={setPersonality}>
              <option default value="sassy">Sassy</option>
              <option value="friendly">Friendly</option>
            </select>
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
