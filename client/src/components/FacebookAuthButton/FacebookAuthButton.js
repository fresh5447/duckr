import React from 'react';
import PropTypes from 'prop-types';
import { button } from './styles.css'


const FacebookAuthButton = ({error, isFetching, onAuth}) =>
  <button className={button} onClick={onAuth}>
    {isFetching === true
      ? 'Loading...'
      : 'Login with facebook'
    }
  </button>

FacebookAuthButton.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  onAuth: PropTypes.func.isRequired
}


export default FacebookAuthButton
