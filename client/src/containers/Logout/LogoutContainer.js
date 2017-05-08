import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Logout } from '../../components';
import { logoutAndUnauth } from '../../redux/modules/users'

class LogoutContainer extends Component {
  componentDidMount() {
    this.props.dispatch(logoutAndUnauth())
  }
  render() {
    return (
      <div>
        <Logout />
      </div>
    )
  }
}

LogoutContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
}


// when you only dispatch one thing
// you get dispatch as a prop
export default connect()(LogoutContainer);
