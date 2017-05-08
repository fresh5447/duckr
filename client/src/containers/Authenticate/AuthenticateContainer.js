import React, { Component } from 'react';
import {Authenticate} from '../../components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as userActionCreators from '../../redux/modules/users';
import { bindActionCreators } from 'redux'

class AuthenticateContainer extends Component {
  handleAuth(e) {
    e.preventDefault();
    this.props.fetchAndHandleAuthedUser()
      .then(() => this.context.router.replace('feed'))
  }
  render() {
    console.log(this.props, 'PROPS: AuthenticateContainer')
    return (
      <div>
        <Authenticate
          isFetching={this.props.isFetching}
          error={this.props.error}
          onAuth={(e) => this.handleAuth(e)} />
      </div>
    )
  }
}

AuthenticateContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  fetchAndHandleAuthedUser: PropTypes.func.isRequired
}

AuthenticateContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect(
  (state) => ({isFetching: state.isFetching, error: state.error}),
  (dispatch) => bindActionCreators(userActionCreators, dispatch)
)(AuthenticateContainer)
