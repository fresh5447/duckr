import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import {ModalContainer} from '../../containers'
import {container, link, navContainer} from './styles.css'


const NavLinks = ({isAuthed}) => {
  return isAuthed === true
    ? <ul>
        <li><Link to='/' className={link}>{'Home'}</Link></li>
      </ul>
    : null
}

const ActionLinks = ({isAuthed}) => {
  return isAuthed === true
    ? <ul>
        <li> <ModalContainer /> </li>
        <li><Link to='/logout' className={link}>{'Logout'}</Link></li>
        <li><Link to='/feed' className={link}>{'Ducks'}</Link></li>
      </ul>
    : <ul>
        <li><Link to='/' className={link}>{'Home'}</Link></li>
        <li><Link to='/auth' className={link}>{'Authenticate'}</Link></li>
      </ul>
}


const Navigation = ({isAuthed}) => {
  return (
    <div className={container}>
      <nav className={navContainer}>
        <NavLinks isAuthed={isAuthed} />
        <ActionLinks isAuthed={isAuthed} />
      </nav>
    </div>
  )
}

Navigation.propTypes = ActionLinks.propTypes = NavLinks.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
}

export default Navigation
